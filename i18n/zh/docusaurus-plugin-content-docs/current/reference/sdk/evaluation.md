---
title: Starwhale 模型评测 SDK
---

## @evaluation.predict

`@evaluation.predict` 是一个修饰器，定义模型评测中的推理过程，类似 MapReduce 中的 map 阶段，能够完成如下核心功能：

- 在 Server 实例上，申请运行所需要的资源。
- 自动读取本地或远端的数据集，将数据集中的数据以单条或批量的方式，传递给 `evaluation.predict` 修饰的函数。
- 通过多副本的设置，实现**分布式数据集消费**的功能，能以水平扩展的方式缩短模型评测任务的用时。
- 自动将函数返回值和数据集的输入 features 存储到 `results` 表中，方便Web UI展示和进一步的 `evaluate` 阶段使用。
- 每单条或每批量组数据会调用一次被修饰的函数，完成推理过程。

### 控制参数 {#predict-params}

- `resources`: (dict, optional)
  - 定义 `predict` 每个任务在 Server 实例上运行时所需要的资源，包括 `mem`，`cpu` 和 `nvidia.com/gpu` 三种类型。
    - `mem`: 单位为 Bytes，支持 int 和 float 类型。
      - 支持以字典的方式设置 `request` 和 `limit`，比如 `resources={"mem": {"request": 100 * 1024, "limit": 200: 1024}}`。
      - 若仅设置单个数字，则 SDK 会自动将 `request` 和 `limit` 设置为相同的数值，比如 `resources={"mem": 100 * 1024}` 等价于 `resources={"mem": {"request": 100 * 1024, "limit": 100 * 1024}}`。
    - `cpu`: 单位为 CPU 核心数，支持 int 和 float 类型。
      - 支持以字典的方式设置 `request` 和 `limit`，比如 `resources={"cpu": {"request": 1, "limit": 2}}`。
      - 若仅设置单个数字，则 SDK 会自动将 `request` 和 `limit` 设置为相同的数值，比如 `resources={"cpu": 1.5}` 等价于 `resources={"cpu": {"request": 1.5, "limit": 1.5}}`。
    - `nvidia.com/gpu`: 单位为 GPU显卡数，支持 int 类型。
      - `nvidia.com/gpu` 不支持设置 `request` 和 `limit`，仅支持单个数字。
  - 需要注意： **`resource` 参数目前仅在 Server 实例中生效**。Cloud 实例，通过在提交评测任务时，选择对应的**资源池**达到相同的作用。Standalone 实例完全不支持该特性。
- `replicas`: (int, optional)
  - `predict` 运行的副本数。
  - `predict` 相当于定义了一个 `Step`, 在该 `Step` 中有若干等价的 `Task`，每个 `Task` 在 Cloud/Server 实例上运行实体是 Pod，在 Standalone 实例上运行实体是 Thread。
  - 当指定多个副本时，这些副本是等价的，它们会共同消费选定的数据集，实现**分布式数据集消费**的目的，可以理解为某个数据集中的某行数据，只会被一个 `predict` 副本读取。
  - 默认值为1。
- `batch_size`: (int, optional)
  - 批量将数据集中的数据传递进函数中。
  - 默认值为1。
- `fail_on_error`: (bool, optional)
  - 当被修饰的函数抛出异常时，是否中断所有模型评测。如果预期某些“异常”数据会导致评测失败，但不想中断整体评测，可以设置 `fail_on_error=False`。
  - 默认为 `True`。
- `auto_log`: (bool, optional)
  - 是否自动记录函数返回值和数据集输入 features 到 `results` 表中。
  - 默认为 `True`。
- `log_mode`: (str, optional)
  - 当 `auto_log=True` 时，可以通过设置 `log_mode` 参数，定义以 `plain` 或 `pickle` 方式记录函数返回值。
  - 默认为 `pickle` 方式。
- `log_dataset_features`: (List[str], optional)
  - 当 `auto_log=True` 时，可以通过该参数，选择性的记录数据集中的某些 features 。
  - 默认会记录所有的 features 。
- `needs`: (List[Callable], optional)
  - 定义该任务运行的前置条件，可以用 needs 语法实现 DAG。
  - `needs` 接受被 `@evaluation.predict`, `@evaluation.evaluate` 和 `@handler` 修饰的函数。
  - 默认为空，不依赖任何其他任务。

### 传入参数 {#predict-input}

被修饰的函数，需要定义一些输入参数，用来接受数据集内容等，包含如下模式：

- 单个 `data` 参数：
  - `data` 为 一个类 dict 类型，能够读取到数据集的 features 内容。
  - 当 `batch_size=1` 或不设置 `batch_size` 时，可以通过 `data['label']` 或 `data.label` 方式读取 label feature。
  - 当设置 `batch_size` > 1 时，`data` 为一个 list。

  ```python
  from starwhale import evaluation

  @evaluation.predict
  def predict(data):
      print(data['label'])
      print(data.label)
  ```

- `data` + `external` 参数方式：
  - `data` 为数据集的features。
  - `external` 为一个 dict 类型，包含 `index`, `index_with_dataset`, `dataset_info`, `context` 和 `dataset_uri` 这些内建属性，可以用来做更细粒度的处理。
    - `index`: 数据集对应行的 index 信息。
    - `index_with_dataset`: 适用于多个数据集输入的时候做 index 区分。
    - `dataset_info`: `starwhale.core.dataset.tabular.TabularDatasetInfo` 对象。
    - `context`: `starwhale.Context` 对象。
    - `dataset_uri`: `starwhale.nase.uri.resource.Resource` 对象。

  ```python
  from starwhale import evaluation

  @evaluation.predict
  def predict(data, external):
      print(data['label'])
      print(data.label)
      print(external["context"])
      print(external["dataset_uri"])
  ```

- `data` + `**kw` 方式：
  - `data` 为数据集的features。
  - `kw` 可以读取到 `external`。

  ```python
  from starwhale import evaluation

  @evaluation.predict
  def predict(data, **kw):
      print(kw["external"]["context"])
      print(kw["external"]["dataset_uri"])
  ```

- `*args` + `**kwargs` 方式：
  - args的第一个元素为 `data`。

  ```python
  from starwhale import evaluation

  @evaluation.predict
  def predict(*args, **kw):
      print(args[0].label)
      print(args[0]["label"])
      print(kw["external"]["context"])
  ```

- `**kwargs` 方式：

  ```python
  from starwhale import evaluation

  @evaluation.predict
  def predict(**kw):
      print(kw["data"].label)
      print(kw["data"]["label"])
      print(kw["external"]["context"])
  ```

- `*args` 方式：
  - 此方式无法读取到 `external` 信息。

  ```python
  from starwhale import evaluation

  @evaluation.predict
  def predict(*args):
      print(args[0].label)
      print(args[0]["label"])
  ```

### 使用示例 {#predict-example}

```python
from starwhale import evaluation

@evaluation.predict
def predict_image(data):
    ...

@evaluation.predict(
    dataset="mnist/version/latest",
    batch_size=32,
    replicas=4,
    needs=[predict_image],
)
def predict_batch_images(batch_data)
    ...

@evaluation.predict(
    resources={"nvidia.com/gpu": 1,
               "cpu": {"request": 1, "limit": 2},
               "mem": 200 * 1024},  # 200MB
    log_mode="plain",
)
def predict_with_resources(data):
    ...

@evaluation.predict(
    replicas=1,
    log_mode="plain",
    log_dataset_features=["txt", "img", "label"],
)
def predict_with_selected_features(data):
    ...
```

## @evaluation.evaluate

`@evaluation.evalute` 是一个修饰器，定义模型评测中的评测过程，类似 MapReduce 中的 reduce 阶段，能够完成如下核心功能：

- 在 Server 实例上，申请运行所需要的资源。
- 自动读取 `predict` 阶段记录到 `results` 表的数据，并以迭代器的方式传入函数中。
- `evaluate` 阶段只会运行一个副本，无法像 `predict` 阶段一样定义 `replicas` 参数。

### 参数 {#evaluate-params}

- `resources`: (dict, optional)
  - 与 `@evaluation.predict` 中的 `resources` 参数定义保持一致。
- `needs`: (List[Callable], optional)
  - 与 `@evaluation.predict` 中的 `needs` 参数定义保持一致。
  - 绝大多数场景中，会依赖一个 `@evaluation.predict` 修饰的函数。
- `use_predict_auto_log`: (bool, optional)
  - 默认为 `True`，传入一个能够能够遍历 `predict` 结果的迭代器到函数中。

### 输入参数 {#evaluate-input}

- 当 `use_predict_auto_log=True`（默认）时，传入一个能够能够遍历 `predict` 结果的迭代器到函数中。
  - 迭代出来的对象为一个字典，包含 `output` 和 `input` 两个key。
    - `output` 为 `predict` 阶段函数返回的元素。
    - `input` 为推理时对应使用的数据集的 features ,为一个字典类型。
- 当 `use_predict_auto_log=False` 时，不传入任何参数到函数中。

### 使用示例 {#evaluate-example}

```python
from starwhale import evaluation

@evaluation.evaluate(needs=[predict_image])
def evaluate_results(predict_result_iter):
    ...

@evaluation.evaluate(
    use_predict_auto_log=False,
    needs=[predict_image],
)
def evaluate_results():
    ...
```

## evaluation.log

`evaluation.log` 是一个函数，记录某些评测指标到特定表中，之后可以通过 Server/Cloud 实例的 Web 页面中查看相关的表。

```python
@classmethod
def log(
    cls, category: str, id: t.Union[str, int], metrics: t.Dict[str, t.Any]
) -> None:
```

### 参数 {#log-params}

- `category`: (str, required)
  - 记录的类别，该值会被作为 Starwhale Datastore 的表名的后缀。
  - 一个 `category` 会对应一张 Starwhale Datastore 的表，这些表会以评测任务ID作为隔离区分，相互不影响。
- `id`: (str|int, required)
  - 记录的ID，表内唯一。
  - 同一张表，只能采用 str 或 int 的一种类型作为 ID 类型。
- `metrics`: (dict, required)
  - 字典类型，key-value 方式记录指标。

### 使用示例 {#log-example}

```python
from starwhale import evaluation

evaluation.log("label/1", 1, {"loss": 0.99, "accuracy": 0.98})
evaluation.log("ppl", "1", {"a": "test", "b": 1})
```

## evaluation.log_summary

`evaluation.log_summary` 是一个函数，记录某些指标到 summary 表中，Server/Cloud 实例评测页面显示的就是 summary 表的数据。
每次调用，Starwhale 都会自动以此次评测的唯一ID作为表的行ID进行更新，可以再一次评测过程中多次调用该函数，用来更新不同的列。

每个项目中有一张 summary 表，所有该项目下的评测任务都会将 summary 信息写入该表中。

```python
@classmethod
def log_summary(cls, *args: t.Any, **kw: t.Any) -> None:
```

### 使用示例 {#log-s-example}

```python
from starwhale import evaluation

evaluation.log_summary(loss=0.99)
evaluation.log_summary(loss=0.99, accuracy=0.99)
evaluation.log_summary({"loss": 0.99, "accuracy": 0.99})
```

## evaluation.iter

`evaluation.iter` 是一个函数，返回一个迭代器，用来迭代式的读取某些模型评测表中的数据。

```python
@classmethod
def iter(cls, category: str) -> t.Iterator:
```

### 参数 {#iter-params}

- `category`: (str, required)
  - 与 `evaluation.log` 函数中的 `category` 参数含义一致。

### 使用示例 {#iter-example}

```python
from starwhale import evaluation

results = [data for data in evaluation.iter("label/0")]
```

## @handler

`@handler` 是一个修饰器，具备如下功能：

- 在 Server 实例上，申请运行所需要的资源。
- 可以控制副本数。
- 多个 Handlers 可以通过依赖关系，生成DAG，便于控制执行流程。
- 可以对外暴露端口，以类似 Web Handler 方式运行。

`@fine_tune`, `@evaluation.predict` 和 `@evaluation.evalute` 可以认为是 `@handler` 在某些特定领域的应用，`@handler` 是这些修饰器的底层实现。`@handler` 更为基础和灵活。

```python
@classmethod
def handler(
    cls,
    resources: t.Optional[t.Dict[str, t.Any]] = None,
    replicas: int = 1,
    needs: t.Optional[t.List[t.Callable]] = None,
    name: str = "",
    expose: int = 0,
    require_dataset: bool = False,
) -> t.Callable:
```

### 参数 {#handler-params}

- `resources`: (dict, optional)
  - 与 `@evaluation.predict` 中的 `resources` 参数定义保持一致。
- `needs`: (List[Callable], optional)
  - 与 `@evaluation.predict` 中的 `needs` 参数定义保持一致。
- `replicas`: (int, optional)
  - 与 `@evaluation.predict` 中的 `replicas` 参数定义保持一致。
- `name`: (str, optional)
  - 显示 handler 时候用的名字。
  - 若不指定，则用修饰函数的名字。
- `expose`: (int, optional)
  - 对外暴露的端口，当运行一个 Web Handler的时候，需要声明暴露的端口。
  - 默认为0，表示不暴露任何端口。
  - 目前只能暴露一个端口。
- `require_dataset`: (bool, optional)
  - 定义此 Handler 运行时，是否需要数据集。
  - 如果 `required_dataset=True`，在 Server/Cloud 实例的 Web 界面创建评测任务的时候，需要让用户强制输入数据集；如果 `required_dataset=False`，则 Web 界面中不需要用户指定数据集。
  - 默认为 `False`。

### 使用示例 {#handler-example}

```python
from starwhale import handler
import gradio

@handler(resources={"cpu": 1, "nvidia.com/gpu": 1}, replicas=3)
def my_handler():
    ...

@handler(needs=[my_handler])
def my_another_handler():
    ...

@handler(expose=7860)
def chatbot():
    with gradio.Blocks() as server:
        ...
    server.launch(server_name="0.0.0.0", server_port=7860)
```

## @fine_tune

`fine_tune` 是一个修饰器，定义模型训练的微调(fine-tune)过程。

一些限制和使用建议：

- `fine_tune` 只有一个副本。
- `fine_tune` 需要有数据集输入。
- 一般在 `fine_tune` 开始时，通过 `Context.get_runtime_context()` 获取数据集。
- 一般在 `fine_tune` 结束是，通过 `starwhale.model.build` 生成微调后的Starwhale 模型包，该模型包会被自动复制到评测对应的项目中。

### 参数 {#ft-params}

- `resources`: (dict, optional)
  - 与 `@evaluation.predict` 中的 `resources` 参数定义保持一致。
- `needs`: (List[Callable], optional)
  - 与 `@evaluation.predict` 中的 `needs` 参数定义保持一致。

### 使用示例 {#ft-example}

```python
from starwhale import model as starwhale_model
from starwhale import fine_tune, Context

@fine_tune(resources={"nvidia.com/gpu": 1})
def llama_fine_tuning():
    ctx = Context.get_runtime_context()

    if len(ctx.dataset_uris) == 2:
        # TODO: use more graceful way to get train and eval dataset
        train_dataset = dataset(ctx.dataset_uris[0], readonly=True, create="forbid")
        eval_dataset = dataset(ctx.dataset_uris[1], readonly=True, create="forbid")
    elif len(ctx.dataset_uris) == 1:
        train_dataset = dataset(ctx.dataset_uris[0], readonly=True, create="forbid")
        eval_dataset = None
    else:
        raise ValueError("Only support 1 or 2 datasets(train and eval dataset) for now")

    #user training code
    train_llama(
        train_dataset=train_dataset,
        eval_dataset=eval_dataset,
    )

    model_name = get_model_name()
    starwhale_model.build(name=f"llama-{model_name}-qlora-ft")
```

## @multi_classification

`@multi_classification` 修饰器使用sklearn lib对多分类问题进行结果分析，输出confusion matrix, roc, auc等值，并且会写入到 starwhale DataStore 相关表中。
使用的时候需要对所修饰的函数返回值有一定要求，返回`(label, result, probability_matrix)` 或 `(label, result)`。

```python
def multi_classification(
    confusion_matrix_normalize: str = "all",
    show_hamming_loss: bool = True,
    show_cohen_kappa_score: bool = True,
    show_roc_auc: bool = True,
    all_labels: t.Optional[t.List[t.Any]] = None,
) -> t.Any:
```

### 参数 {#mc-params}

- `confusion_matrix_normalize`: (str, optional)
  - 接收三种参数：
    - `true`: rows
    - `pred`: columns
    - `all`: rows+columns
- `show_hamming_loss`: (bool, optional)
  - 是否计算hamming loss。
  - 默认为 `True`。
- `show_cohen_kappa_score`: (bool, optional)
  - 是否计算 cohen kappa score。
  - 默认为 `True`。
- `show_roc_auc`: (bool, optional)
  - 是否计算roc/auc, 计算的时候，需要函数返回(label，result, probability_matrix) 三元组，否则只需返回(label, result) 两元组即可。
  - 默认为 `True`。
- `all_labels`: (List, optional)
  - 定义所有的Labels。

### 使用示例 {#mc-example}

```python

@multi_classification(
    confusion_matrix_normalize="all",
    show_hamming_loss=True,
    show_cohen_kappa_score=True,
    show_roc_auc=True,
    all_labels=[i for i in range(0, 10)],
)
def evaluate(ppl_result) -> t.Tuple[t.List[int], t.List[int], t.List[t.List[float]]]:
    label, result, probability_matrix = [], [], []
    return label, result, probability_matrix

@multi_classification(
    confusion_matrix_normalize="all",
    show_hamming_loss=True,
    show_cohen_kappa_score=True,
    show_roc_auc=False,
    all_labels=[i for i in range(0, 10)],
)
def evaluate(ppl_result) -> t.Tuple[t.List[int], t.List[int], t.List[t.List[float]]]:
    label, result = [], [], []
    return label, result
```

## PipelineHandler

`PipelineHandler` 是一个类，提供默认的模型评测过程定义，需要用户实现 `predict` 和 `evaluate` 函数。

`PipelineHandler` 等价于 `@evaluation.predict` + `@evaluation.evaluate`，展示使用方式不一样，背后的模型评测过程一致。

用户需要实现如下函数：

- `predict`: 定义推理过程，等价于 `@evaluation.predict` 修饰的函数。
- `evaluate`: 定义评测过程，等价于 `@evaluation.evaluate` 修饰的函数。

```python
from typing import Any, Iterator
from abc import ABCMeta, abstractmethod

class PipelineHandler(metaclass=ABCMeta):
    def __init__(
        self,
        predict_batch_size: int = 1,
        ignore_error: bool = False,
        predict_auto_log: bool = True,
        predict_log_mode: str = PredictLogMode.PICKLE.value,
        predict_log_dataset_features: t.Optional[t.List[str]] = None,
        **kwargs: t.Any,
    ) -> None:
        self.context = Context.get_runtime_context()
        ...

    def predict(self, data: Any, **kw: Any) -> Any:
        raise NotImplementedError

    def evaluate(self, ppl_result: Iterator) -> Any
        raise NotImplementedError
```

### 参数 {#pl-params}

- `predict_batch_size`: (int, optional)
  - 等价于 `@evaluation.predict` 中的 `batch_size` 参数。
  - 默认值为1。
- `ignore_error`: (bool, optional)
  - 等价于 `@evaluation.predict` 中的 `fail_on_error` 参数。
  - 默认值为 `False`。
- `predict_auto_log`: (bool, optional)
  - 等价于 `@evaluation.predict` 中的 `auto_log` 参数。
  - 默认值为 `True`。
- `predict_log_mode`: (bool, optional)
  - 等价于 `@evaluation.predict` 中的 `log_mode` 参数。
  - 默认值为 `pickle`。
- `predict_log_dataset_features`: (bool, optional)
  - 等价于 `@evaluation.predict` 中的 `log_dataset_features` 参数。
  - 默认值为空，对记录所有 features。
  
### PipelineHandler.run 修饰符 {#pl-run}

`PipelineHandler.run` 修饰符可以对 `predict` 和 `evaluate` 方法进行资源描述，支持 `replicas` 和 `resources` 的定义：

- `PipelineHandler.run` 只能修饰继承自 `PipelineHandler` 子类中的 `predict` 和 `evaluate`方法。
- `predict` 方法可以设置 `replicas` 参数。`evaluate` 方法的 `replicas` 值永远为1。
- `resources` 参数与 `@evaluation.predict` 或 `@evaluation.evaluate` 中的 `resources` 参数定义和使用方法保持一致。
- `PipelineHandler.run` 修饰器是可选的。
- `PipelineHandler.run` 仅在 Server 和 Cloud 实例中生效，Standalone 实例不支持资源定义。

```python
@classmethod
def run(
    cls, resources: t.Optional[t.Dict[str, t.Any]] = None, replicas: int = 1
) -> t.Callable:
```

### 使用示例 {#pl-example}

```python
import typing as t

import torch
from starwhale import PipelineHandler

class Example(PipelineHandler):
    def __init__(self) -> None:
        super().__init__()
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.model = self._load_model(self.device)

    @PipelineHandler.run(replicas=4, resources={"memory": 1 * 1024 * 1024 *1024, "nvidia.com/gpu": 1}) # 1G Memory, 1 GPU
    def predict(self, data: t.Dict):
        data_tensor = self._pre(data.img)
        output = self.model(data_tensor)
        return self._post(output)

    @PipelineHandler.run(resources={"memory": 1 * 1024 * 1024 *1024}) # 1G Memory
    def evaluate(self, ppl_result):
        result, label, pr = [], [], []
        for _data in ppl_result:
            label.append(_data["input"]["label"])
            result.extend(_data["output"][0])
            pr.extend(_data["output"][1])
        return label, result, pr

    def _pre(self, input: Image) -> torch.Tensor:
        ...

    def _post(self, input):
        ...

    def _load_model(self, device):
        ...
```

## Context

执行模型评测过程中传入的上下文信息，包括Project、Task ID等。Context 的内容是自动注入的，可以通过如下方式使用：

- 继承 `PipelineHandler` 类内使用 `self.context` 对象。
- 通过 `Context.get_runtime_context()` 获取。

**需要注意，只有在模型评测过程中，才能使用`Context`，否则程序会抛出异常。**

目前Context可以获得如下值：

- `project`: str
  - Project 名字。
- `version`: str
  - 模型评测的唯一ID。
- `step`: str
  - Step 名字。
- `total`: int
  - Step 下所有 Task 的数量。
- `index`: int
  - Task 索引标号，下标从0开始。
- `dataset_uris`: List[str]
  - Starwhale 数据集的URI 列表。

### 使用示例 {#context-example}

```python

from starwhale import Context, PipelineHandler

def func():
    ctx = Context.get_runtime_context()
    print(ctx.project)
    print(ctx.version)
    print(ctx.step)
    ...

class Example(PipelineHandler):

    def predict(self, data: t.Dict):
        print(self.context.project)
        print(self.context.version)
        print(self.context.step)
```

## @starwhale.api.service.api

`@starwhale.api.service.api` 是一个修饰器，提供基于 Gradio 的简易 Web Handler 输入定义，当用户使用 `swcli model serve` 命令启动 Web Service 接收外部请求，并将推理结果返回给用户，实现在线评测。

### 使用示例 {#api-example}

```python
import gradio
from starwhale.api.service import api

def predict_image(img):
    ...

@api(gradio.File(), gradio.Label())
def predict_view(file: t.Any) -> t.Any:
    with open(file.name, "rb") as f:
        data = Image(f.read(), shape=(28, 28, 1))
    _, prob = predict_image({"img": data})
    return {i: p for i, p in enumerate(prob)}
```

## starwhale.api.service.Service

如果希望自定义 web service 的实现, 可以继承 `Service` 并重写 `serve` 函数即可。

```python
class CustomService(Service):
    def serve(self, addr: str, port: int, handler_list: t.List[str] = None) -> None:
        ...

svc = CustomService()

@svc.api(...)
def handler(data):
    ...
```

说明:

- 使用 `PipelineHandler.add_api` 函数添加的 handler 和 `api` 以及实例化的 `Service.api` decorator 添加的 handler 可以同时生效
- 如果使用自定义的 `Service`, 需要在 model 中实例化自定义的 Service 类

### 自定义 Request 和 Response

Request 和 Response 分别是用于接收用户请求和返回给用户结果的处理类, 可以简单的理解成是 `handler` 的前处理和后处理逻辑

Starwhale 将支持 Dataset 内置类型的 Request 实现以及 Json Response 的实现, 同时用户可以自定义处理逻辑来使用, 自定义的示例如下：

```python
import typing as t

from starwhale.api.service import (
    Request,
    Service,
    Response,
)

class CustomInput(Request):
    def load(self, req: t.Any) -> t.Any:
        return req


class CustomOutput(Response):
    def __init__(self, prefix: str) -> None:
        self.prefix = prefix

    def dump(self, req: str) -> bytes:
        return f"{self.prefix} {req}".encode("utf-8")

svc = Service()

@svc.api(request=CustomInput(), response=CustomOutput("hello"))
def foo(data: t.Any) -> t.Any:
    ...
```
