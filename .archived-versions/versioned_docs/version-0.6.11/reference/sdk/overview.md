---
title: Python SDK Overview
---

Starwhale provides a series of Python SDKs to help manage datasets, models, evaluations etc. Using the Starwhale Python SDK can make it easier to complete your ML/DL development tasks.

## Classes

- `PipelineHandler`: Provides default model evaluation process definition, requires implementation of `predict` and `evaluate` methods.
- `Context`: Passes context information during model evaluation, including Project, Task ID etc.
- `class Dataset`: Starwhale Dataset class.
- `class starwhale.api.service.Service`: The base class of online evaluation.
- `class Job`: Starwhale Job class.
- `class Evaluation`: Starwhale Evaluation class.

## Functions

- `@multi_classification`: Decorator for multi-class problems to simplify evaluate result calculation and storage for better evaluation presentation.
- `@handler`: Decorator to define a running entity with resource attributes (mem/cpu/gpu). You can control replica count. Handlers can form DAGs through dependencies to control execution flow.
- `@evaluation.predict`: Decorator to define inference process in model evaluation, similar to map phase in MapReduce.
- `@evaluation.evaluate`: Decorator to define evaluation process in model evaluation, similar to reduce phase in MapReduce.
- `model.build`: Build Starwhale model.
- `@fine_tune`: Decorator to define model fine-tuning process.
- `init_logger`: Set log level, implement 5-level logging.
- `dataset`: Get `starwhale.Dataset` object, by creating new datasets or loading existing datasets.
- `@starwhale.api.service.api`: Decorator to provide a simple Web Handler input definition based on Gradio.
- `login`: Log in to the server/cloud instance.
- `logout`: Log out of the server/cloud instance.
- `job`: Get `starwhale.Job` object by the Job URI.
- `@PipelineHandler.run`: Decorator to define the resources for the predict and evaluate methods in PipelineHandler subclasses.

## Data Types

- `COCOObjectAnnotation`: Provides COCO format definitions.
- `BoundingBox`: Bounding box type, currently in `LTWH` format - `left_x`, `top_y`, `width` and `height`.
- `ClassLabel`: Describes the number and types of labels.
- `Image`: Image type.
- `GrayscaleImage`: Grayscale image type, e.g. MNIST digit images, a special case of `Image` type.
- `Audio`: Audio type.
- `Video`: Video type.
- `Text`: Text type, default `utf-8` encoding, for storing large texts.
- `Binary`: Binary type, stored in bytes, for storing large binary content.
- `Line`: Line type.
- `Point`: Point type.
- `Polygon`: Polygon type.
- `Link`: Link type, for creating `remote-link` data.
- `MIMEType`: Describes multimedia types supported by Starwhale, used in `mime_type` attribute of `Image`, `Video` etc for better Dataset Viewer.

## Other

- `__version__`: Version of Starwhale Python SDK and `swcli`, string constant.

## Further reading

- If you want to build and manage datasets, read about the [Starwhale Dataset SDK](dataset) and [Starwhale Data Types](type).
- If you want to write model evaluation and fine-tuning programs, read about the [Starwhale Evaluation SDK](evaluation).
- If you want to get job info and evaluation results, read about the [Starwhale Job SDK](job).
- If you want to build and manage Starwhale model packages through Python scripts, read about the [Starwhale Model SDK](model).
- If you want to learn about other utility functions, read about [Other SDKs](other).
