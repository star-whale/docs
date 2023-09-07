---
title: Starwhale Model Evaluation SDK
---

## @evaluation.predict

The `@evaluation.predict` decorator defines the inference process in the Starwhale Model Evaluation, similar to the `map` phase in MapReduce. It contains the following core features:

- On the Server instance, require the resources needed to run.
- Automatically read the local or remote datasets, and pass the data in the datasets one by one or in batches to the function decorated by `evaluation.predict`.
- By the replicas setting, implement **distributed dataset consumption** to horizontally scale and shorten the time required for the model evaluation tasks.
- Automatically store the return values of the function and the input features of the dataset into the `results` table, for display in the Web UI and further use in the `evaluate` phase.
- The decorated function is called once for each single piece of data or each batch, to complete the inference process.

### Parameters {#predict-params}

- `resources`: (dict, optional)
  - Defines the resources required by each `predict` task when running on the Server instance, including `mem`, `cpu`, and `nvidia.com/gpu`.
  - `mem`: The unit is Bytes, int and float types are supported.
    - Supports setting `request` and `limit` as a dictionary, e.g. `resources={"mem": {"request": 100 * 1024, "limit": 200 * 1024}}`.
    - If only a single number is set, the Python SDK will automatically set `request` and `limit` to the same value, e.g. `resources={"mem": 100 * 1024}` is _equivalent_ to `resources={"mem": {"request": 100 * 1024, "limit": 100 * 1024}}`.
  - `cpu`: The unit is the number of CPU cores, int and float types are supported.
    - Supports setting `request` and `limit` as a dictionary, e.g. `resources={"cpu": {"request": 1, "limit": 2}}`.
    - If only a single number is set, the SDK will automatically set `request` and `limit` to the same value, e.g. `resources={"cpu": 1.5}` is equivalent to `resources={"cpu": {"request": 1.5, "limit": 1.5}}`.
  - `nvidia.com/gpu`: The unit is the number of GPUs, int type is supported.
    - `nvidia.com/gpu` does not support setting `request` and `limit`, only a single number is supported.
  - Note: **The `resources` parameter currently only takes effect on the Server instances**. For the Cloud instances, the same can be achieved by selecting the corresponding **resource pool** when submitting the evaluation task. Standalone instances do not support this feature at all.
- `replicas`: (int, optional)
  - The number of replicas to run `predict`.
  - `predict` defines a `Step`, in which there are multiple equivalent `Tasks`. Each `Task` runs on a Pod in Cloud/Server instances, and a Thread in Standalone instances.
  - When multiple replicas are specified, they are equivalent and will jointly consume the selected dataset to achieve **distributed dataset consumption**. It can be understood that a row in the dataset will only be read by one `predict` replica.
  - The default is 1.
- `batch_size`: (int, optional)
  - Batch size for passing data from the dataset into the function.
  - The default is 1.
- `fail_on_error`: (bool, optional)
  - Whether to interrupt the entire model evaluation when the decorated function throws an exception. If you expect some "exceptional" data to cause evaluation failures but don't want to interrupt the overall evaluation, you can set `fail_on_error=False`.
  - The default is `True`.
- `auto_log`: (bool, optional)
  - Whether to automatically log the return values of the function and the input features of the dataset to the `results` table.
  - The default is `True`.
- `log_mode`: (str, optional)
  - When `auto_log=True`, you can set `log_mode` to define logging the return values in `plain` or `pickle` format.
  - The default is `pickle`.
- `log_dataset_features`: (List[str], optional)
  - When `auto_log=True`, you can selectively log certain features from the dataset via this parameter.
  - By default, all features will be logged.
- `needs`: (List[Callable], optional)
  - Defines the prerequisites for this task to run, can use the needs syntax to implement DAG.
  - `needs` accepts functions decorated by `@evaluation.predict`, `@evaluation.evaluate`, and `@handler`.
  - The default is empty, i.e. does not depend on any other tasks.

### Input {#predict-input}

The decorated functions need to define some input parameters to accept dataset data, etc. They contain the following patterns:

- `data`:
  - `data` is a dict type that can read the features of the dataset.
  - When `batch_size=1` or `batch_size` is not set, the label feature can be read through `data['label']` or `data.label`.
  - When `batch_size` is set to > 1, `data` is a list.

  ```python
  from starwhale import evaluation

  @evaluation.predict
  def predict(data):
      print(data['label'])
      print(data.label)
  ```

- `data` + `external`:
  - `data` is a dict type that can read the features of the dataset.
  - `external` is also a dict, including: `index`, `index_with_dataset`, `dataset_info`, `context` and `dataset_uri` keys. The attributes can be used for the further fine-grained processing.
    - `index`: The index of the dataset row.
    - `index_with_dataset`: The index with the dataset info.
    - `dataset_info`: `starwhale.core.dataset.tabular.TabularDatasetInfo` Class.
    - `context`: `starwhale.Context` Class.
    - `dataset_uri`: `starwhale.nase.uri.resource.Resource` Class.

  ```python
  from starwhale import evaluation

  @evaluation.predict
  def predict(data, external):
      print(data['label'])
      print(data.label)
      print(external["context"])
      print(external["dataset_uri"])
  ```

- `data` + `**kw`:
  - `data` is a dict type that can read the features of the dataset.
  - `kw` is a dict that contains `external`.

  ```python
  from starwhale import evaluation

  @evaluation.predict
  def predict(data, **kw):
      print(kw["external"]["context"])
      print(kw["external"]["dataset_uri"])
  ```

- `*args` + `**kwargs`:
  - The first argument of args list is `data`.

  ```python
  from starwhale import evaluation

  @evaluation.predict
  def predict(*args, **kw):
      print(args[0].label)
      print(args[0]["label"])
      print(kw["external"]["context"])
  ```

- `**kwargs`:

  ```python
  from starwhale import evaluation

  @evaluation.predict
  def predict(**kw):
      print(kw["data"].label)
      print(kw["data"]["label"])
      print(kw["external"]["context"])
  ```

- `*args`:
  - `*args` does not contain `external`.

  ```python
  from starwhale import evaluation

  @evaluation.predict
  def predict(*args):
      print(args[0].label)
      print(args[0]["label"])
  ```

### Examples {#predict-example}

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

`@evaluation.evaluate` is a decorator that defines the evaluation process in the Starwhale Model evaluation, similar to the reduce phase in MapReduce. It contains the following core features:

- On the Server instance, apply for the resources.
- Read the data recorded in the `results` table automatically during the `predict` phase, and pass it into the function as an iterator.
- The `evaluate` phase will only run one replica, and cannot define the `replicas` parameter like the `predict` phase.

### Parameters {#evaluate-params}

- `resources`: (dict, optional)
  - Consistent with the `resources` parameter definition in `@evaluation.predict`.
- `needs`: (List[Callable], optional)
  - Consistent with the `needs` parameter definition in `@evaluation.predict`.
  - In the common case, it will depend on a function decorated by `@evaluation.predict`.
- `use_predict_auto_log`: (bool, optional)
  - Defaults to `True`, passes an iterator that can traverse the `predict` results to the function.

### Input {#evaluate-input}

- When `use_predict_auto_log=True` (default), pass an iterator that can traverse the `predict` results into the function.
  - The iterated object is a dictionary containing two keys: `output` and `input`.
    - `output` is the element returned by the `predict` stage function.
    - `input` is the features of the corresponding dataset during the inference process, which is a dictionary type.
- When `use_predict_auto_log=False`, do not pass any parameters into the function.

### Examples {#evaluate-example}

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

`evaluation.log` is a function that logs the certain evaluation metrics to the specific tables, which can be viewed as the Web page in the Server/Cloud instance.

### Parameters {#log-params}

- `category`: (str, required)
  - The category of the logged record, which will be used as a suffix for the Starwhale Datastore table name.
  - Each `category` corresponds to a Starwhale Datastore table, with these tables isolated by evaluation task ID without affecting each other.
- `id`: (str|int, required)
  - The ID of the logged record, unique within the table.
  - Only one type, either str or int, can be used as ID type in the same table.
- `metrics`: (dict, required)
  - A dictionary recording metrics in key-value pairs.

### Examples {#log-example}

```python
from starwhale import evaluation

evaluation.log("label/1", 1, {"loss": 0.99, "accuracy": 0.98})
evaluation.log("ppl", "1", {"a": "test", "b": 1})
```

## evaluation.log_summary

`evaluation.log_summary` is a function that logs the certain metrics to the summary table. The evaluation page of a Server/Cloud instance displays data from the summary table.

Each time it is called, Starwhale automatically updates the table using the unique ID of the current evaluation as the row ID. This function can be called multiple times during an evaluation to update different columns.

Each project has one summary table, and all evaluation jobs under that project will log their summary information into this table.

```python
@classmethod
def log_summary(cls, *args: t.Any, **kw: t.Any) -> None:
```

### Examples {#log-s-example}

```python
from starwhale import evaluation

evaluation.log_summary(loss=0.99)
evaluation.log_summary(loss=0.99, accuracy=0.99)
evaluation.log_summary({"loss": 0.99, "accuracy": 0.99})
```

## evaluation.iter

`evaluation.iter` is a function that returns an iterator for reading data iteratively from certain model evaluation tables.

```python
@classmethod
def iter(cls, category: str) -> t.Iterator:
```

### Parameters {#iter-params}

- `category`: (str, required)
  - This parameter is consistent with the meaning of the `category` parameter in the `evaluation.log` function.

### Examples {#iter-example}

```python
from starwhale import evaluation

results = [data for data in evaluation.iter("label/0")]
```

## @handler

`@handler` is a decorator that provides the following functionalities:

- On a Server instance, it requests the required resources to run.
- It can control the number of replicas.
- Multiple handlers can form a DAG through dependency relationships to control the execution workflow.
- It can expose ports externally to run like a web handler.

`@fine_tune`, `@evaluation.predict` and `@evaluation.evalute` can be considered applications of `@handler` in the certain specific areas. `@handler` is the underlying implementation of these decorators and is more fundamental and flexible.

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

### Parameters {#handler-params}

- `resources`: (dict, optional)
  - Consistent with the `resources` parameter definition in `@evaluation.predict`.
- `needs`: (List[Callable], optional)
  - Consistent with the `needs` parameter definition in `@evaluation.predict`.
- `replicas`: (int, optional)
  - Consistent with the `replicas` parameter definition in `@evaluation.predict`.
- `name`: (str, optional)
  - The name displayed for the handler.
  - If not specified, use the decorated function's name.
- `expose`: (int, optional)
  - The port exposed externally. When running a web handler, the exposed port needs to be declared.
  - The default is 0, meaning no port is exposed.
  - Currently only one port can be exposed.
- `require_dataset`: (bool, optional)
  - Defines whether this handler requires a dataset when running.
  - If `required_dataset=True`, the user is required to input a dataset when creating an evaluation task on the Server/Cloud instance web page. If `required_dataset=False`, the user does not need to specify a dataset on the web page.
  - The default is `False`.

### Examples {#handler-example}

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

`fine_tune` is a decorator that defines the fine-tuning process for model training.

Some restrictions and usage suggestions:

- `fine_tune` has only one replica.
- `fine_tune` requires dataset input.
- Generally, the dataset is obtained through `Context.get_runtime_context()` at the start of `fine_tune`.
- Generally, at the end of `fine_tune`, the fine-tuned Starwhale model package is generated through `starwhale.model.build`, which will be automatically copied to the corresponding evaluation project.

### Parameters {#ft-params}

- `resources`: (dict, optional)
  - Consistent with the `resources` parameter definition in `@evaluation.predict`.
- `needs`: (List[Callable], optional)
  - Consistent with the `needs` parameter definition in `@evaluation.predict`.

### Examples {#ft-example}

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

The `@multi_classification` decorator uses the sklearn lib to analyze results for multi-classification problems, outputting the confusion matrix, ROC, AUC etc., and writing them to related tables in the Starwhale Datastore.

When using it, certain requirements are placed on the return value of the decorated function, which should be `(label, result)` or `(label, result, probability_matrix)`.

```python
def multi_classification(
    confusion_matrix_normalize: str = "all",
    show_hamming_loss: bool = True,
    show_cohen_kappa_score: bool = True,
    show_roc_auc: bool = True,
    all_labels: t.Optional[t.List[t.Any]] = None,
) -> t.Any:
```

### Parameters {#mc-params}

- `confusion_matrix_normalize`: (str, optional)
  - Accepts three parameters:
    - `true`: rows
    - `pred`: columns
    - `all`: rows+columns
- `show_hamming_loss`: (bool, optional)
  - Whether to calculate the Hamming loss.
  - The default is `True`.
- `show_cohen_kappa_score`: (bool, optional)
  - Whether to calculate the Cohen kappa score.
  - The default is `True`.
- `show_roc_auc`: (bool, optional)
  - Whether to calculate ROC/AUC. To calculate, the function needs to return a (label, result, probability_matrix) tuple, otherwise a (label, result) tuple is sufficient.
  - The default is `True`.
- `all_labels`: (List, optional)
  - Defines all the labels.

### Examples {#mc-example}

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

The `PipelineHandler` class provides a default model evaluation workflow definition that requires users to implement the predict and evaluate functions.

The `PipelineHandler` is equivalent to using the `@evaluation.predict` and `@evaluation.evaluate` decorators together - the usage looks different but the underlying model evaluation process is the same.

**Note that PipelineHandler currently does not support defining resources parameters.**

Users need to implement the following functions:

- `predict`: Defines the inference process, equivalent to a function decorated with `@evaluation.predict`.

- `evaluate`: Defines the evaluation process, equivalent to a function decorated with `@evaluation.evaluate`.

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

### Parameters {#pl-params}

- `predict_batch_size`: (int, optional)
  - Equivalent to the `batch_size` parameter in `@evaluation.predict`.
  - Default is 1.
- `ignore_error`: (bool, optional)
  - Equivalent to the `fail_on_error` parameter in `@evaluation.predict`.
  - Default is `False`.
- `predict_auto_log`: (bool, optional)
  - Equivalent to the `auto_log` parameter in `@evaluation.predict`.
  - Default is `True`.
- `predict_log_mode`: (str, optional)
  - Equivalent to the `log_mode` parameter in `@evaluation.predict`.
  - Default is `pickle`.
- `predict_log_dataset_features`: (bool, optional)
  - Equivalent to the `log_dataset_features parameter` in `@evaluation.predict`.
  - Default is `None`, which records all features.

### PipelineHandler.run Decorator {#pl-run}

The `PipelineHandler.run` decorator can be used to describe resources for the `predict` and `evaluate` methods, supporting definitions of `replicas` and `resources`:

- The `PipelineHandler.run` decorator can only decorate `predict` and `evaluate` methods in subclasses inheriting from `PipelineHandler`.
- The `predict` method can set the `replicas` parameter. The `replicas` value for the `evaluate` method is always 1.
- The `resources` parameter is defined and used in the same way as the `resources` parameter in `@evaluation.predict` or `@evaluation.evaluate`.
- The `PipelineHandler.run` decorator is optional.
- The `PipelineHandler.run` decorator only takes effect on Server and Cloud instances, not Standalone instances that don't support resource definition.

```python
@classmethod
def run(
    cls, resources: t.Optional[t.Dict[str, t.Any]] = None, replicas: int = 1
) -> t.Callable:
```

### Examples {#pl-example}

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

The context information passed during model evaluation, including Project, Task ID, etc. The Context content is automatically injected and can be used in the following ways:

- Inherit the `PipelineHandler` class and use the `self.context` object.
- Get it through `Context.get_runtime_context()`.

**Note that `Context` can only be used during model evaluation, otherwise the program will throw an exception.**

Currently Context can get the following values:

- `project`: str
  - Project name.
- `version`: str
  - Unique ID of model evaluation.
- `step`: str
  - Step name.
- `total`: int
  - Total number of Tasks under the Step.
- `index`: int
  - Task index number, starting from 0.
- `dataset_uris`: List[str]
  - List of Starwhale dataset URIs.

### Examples {#context-example}

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

`@starwhale.api.service.api` is a decorator that provides a simple Web Handler input definition based on Gradio for accepting external requests and returning inference results to the user when launching a Web Service with the `swcli model serve` command, enabling online evaluation.

### Examples {#api-example}

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

If you want to customize the web service implementation, you can subclass `Service` and override the `serve` method.

```python
class CustomService(Service):
    def serve(self, addr: str, port: int, handler_list: t.List[str] = None) -> None:
        ...

svc = CustomService()

@svc.api(...)
def handler(data):
    ...
```

Notes:

- Handlers added with `PipelineHandler.add_api` and the `api` decorator or `Service.api` can work together
- If using a custom `Service`, you need to instantiate the custom Service class in the model

### Custom Request and Response

Request and Response are handler preprocessing and postprocessing classes for receiving user requests and returning results. They can be simply understood as pre and post logic for the `handler`.

Starwhale provides built-in Request implementations for Dataset types and Json Response. Users can also customize the logic as follows:

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
