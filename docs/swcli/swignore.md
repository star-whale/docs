---
title: About the .swignore file
---

The `.swignore` file is similar to `.gitignore`, `.dockerignore`, and other files used to define ignored files or dirs. The `.swignore` files mainly used in the Starwhale Model building process. By default, the `swcli model build` command or `starwhale.model.build()` Python SDK will traverse all files in the specified directory and automatically exclude certain known files or directories that are not suitable for inclusion in the model package.

## PATTERN FORMAT

* Each line in a swignore file specifies a pattern, which matches files and directories.
* A blank line matches no files, so it can serve as a separator for readability.
* An asterisk `*` matches anything except a slash.
* A line starting with `#` serves as a comment.
* Support wildcard expression, for example: `*.jpg`, `.png`.

## Auto Ingored files or dirs

If you want to include the auto ingored files or dirs, you can add `--add-all` for `swcli model build` command.

* `__pycache__/`
* `*.py[cod]`
* `*$py.class`
* venv installation dir
* conda installation dir

## Example

Here is the .swignore file used in the [MNIST](https://github.com/star-whale/starwhale/tree/main/example/mnist) example:

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
