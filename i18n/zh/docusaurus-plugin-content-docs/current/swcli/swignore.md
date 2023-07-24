---
title: 关于 .swignore 文件
---

`.swignore` 文件与 `.gitignore`, `.dockerignore` 等文件类似，都是用来定义忽略某些文件或文件夹。`.swignore` 文件主要应用在 Starwhale 的模型构建过程中。默认情况下，`swcli model build` 命令 或 `starwhale.model.build()` Python SDK会遍历指定目录下的所有文件，并自动排除一些已知的、不适合放入模型包中的文件或目录。

## 文件格式

* swignore文件中的每一行指定一个匹配文件和目录的模式。
* 空行不匹配任何文件，因此它可以作为可读性的分隔符。
* 星号`*`匹配除斜杠以外的任何内容。
* 以`#`开头的行作为注释。
* 支持wildcard的表达，类似 `*.jpg`, `*.png`。

## 默认下自动排除的文件或目录

如果不想排除这些文件，可以构建模型 (`swcli model build` 命令) 的时候增加 `--add-all` 参数。

* `__pycache__/`
* `*.py[cod]`
* `*$py.class`
* venv安装目录
* conda安装目录

## 例子

这是[MNIST](https://github.com/star-whale/starwhale/tree/main/example/mnist)示例中使用的.swignore文件：

```bash
venv/*
.git/*
.history*
.vscode/*
.venv/*
data/*
.idea/*
*.py[cod]
```
