---
title: Python SDK 概览
---

Starwhale 提供一系列的 Python SDK，帮助用户管理数据集、模型和评测等调用，使用 Starwhale Python SDK 能让您更好的完成 ML/DL 开发任务。

## 类

- `class PipelineHandler`: 提供默认的模型评测过程定义，需要用户实现 `predict` 和 `evaluate` 函数。
- `class Context`: 执行模型评测过程中传入的上下文信息，包括 Project、Task ID 等。
- `class Dataset`: Starwhale 数据集类。
- `class starwhale.api.service.Service`: 在线评测的基础类。

## 函数

- `@multi_classification`: 修饰器，适用于多分类问题，用来简化 evaluate 结果的进一步计算和结果存储，能更好的呈现评测结果。
- `@handler`: 修饰器，定义一个带有资源属性（mem/cpu/gpu）的运行实体，可以控制副本数。多个Handlers可以通过依赖关系，生成DAG，便于控制执行流程。
- `@evaluation.predict`: 修饰器，定义模型评测中的推理过程，类似 MapReduce 中的 map 阶段。
- `@evaluation.evaluate`: 修饰器，定义模型评测中的评测过程，类似 MapReduce 中的 reduce 阶段。
- `evaluation.log`: 记录某些评测指标到特定表中。
- `evaluation.log_summary`: 记录某些指标到 summary 表中。
- `evaluation.iter`: 迭代读取某些表中的数据。
- `model.build`: 进行 Starwhale 模型构建。
- `@fine_tune`: 修饰器，定义模型训练的微调(fine-tune)过程。
- `init_logger`: 设置日志输出级别，实现五种级别日志输出。
- `dataset`: 获取 `starwhale.Dataset` 对象，包括创建新的数据集和加载已经存在的数据集两种方式。
- `@starwhale.api.service.api`: 修饰器，提供基于 Gradio 的简易 Web Handler 输入定义，实现在线评测。
- `login`: 登录 server/cloud 实例。
- `logout`: 登出 server/cloud 实例。

## 数据类型

- `COCOObjectAnnotation`: 提供COCO类型的定义。
- `BoundingBox`: 边界框类型，目前为 `LTWH` 格式，即 `left_x`, `top_y`, `width` 和 `height`。
- `ClassLabel`: 描述label的数量和类型。
- `Image`: 图片类型。
- `GrayscaleImage`: 灰度图类型，比如MNIST中数字手写体图片，是 `Image` 类型的一个特例。
- `Audio`: 音频类型。
- `Video`: 视频类型。
- `Text`: 文本类型，默认为 `utf-8` 格式，用来存储大文本。
- `Binary`: 二进制类型，用 bytes 存储，用来存储比较大的二进制内容。
- `Line`: 直线类型。
- `Point`: 点类型。
- `Polygon`: 多边形类型。
- `Link`: Link类型，用来制作 `remote-link` 类型的数据。
- `S3LinkAuth`: 当数据存储在基于S3协议的对象存储上时，该类型负责描述授权、密钥信息。
- `MIMEType`: 描述 Starwhale 支持的多媒体类型，用在 `Image`、`Video` 等类型的 mime_type 属性上，能更好的进行 Dataset Viewer。
- `LinkType`: 描述 Starwhale 支持的remote-link类型，目前支持 `LocalFS` 和 `S3` 两种类型。

## 其他

- `__version__`: Starwhale Python SDK 和 `swcli` 版本，是字符串常量。

## 进一步阅读建议

- 如果您想构建、管理数据集，请阅读 [Starwhale 数据集 SDK](dataset) 和 [Starwhale 数据类型](type)。
- 如果您想编写模型评测和微调程序，请阅读 [Starwhale 模型评测 SDK](evaluation)。
- 如果您想通过 Python Script 构建和管理 Starwhale 模型包，请阅读 [Starwhale 模型 SDK](model)。
- 如果您想了解其他功能性函数，请阅读 [其他 SDK](other)。
