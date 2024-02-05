---
title: 如何用项目组织和管理资源
---

“项目”是组织和管理资源（如模型、数据集、运行时环境等）的基本单位。您可以根据您的需求创建和管理项目，如，可以按照业务团队、产品线、或者模型来创建项目。一个用户可以创建和参与一个或者多个项目。

项目类型：

Starwhale 项目分为 私有项目和公共项目。

- **私有项目**：项目（以及项目中的相关资源）仅对有权限的项目成员可见，项目成员可以查看或者编辑项目（以及项目中的相关资源）。有关角色的更多信息，请参阅[Starwhale中的角色和权限](roles-permissions)

- **公共项目**：项目（以及项目中的相关资源）对所有 Starwhale 用户可见，项目成员可以查看或者编辑项目（以及项目中的相关资源）。有关角色的更多信息，请参阅[Starwhale中的角色和权限](roles-permissions)

## 创建项目

1. 进入项目列表页，点击右上角 **创建** 按钮；
2. 输入 **项目名称**；
3. 选择项目类型，默认为私有项目，可根据需求选择公共项目；
4. 填写描述内容；
5. 点击 **提交** 创建项目。

## 编辑项目

1. 进入项目列表页，可通过搜索项目名称找到需要编辑的项目，点击 **编辑项目** 按钮；
2. 对需要编辑的内容进行标记；
3. 点击 **提交** 保存编辑内容。

## 查看项目

### 我的项目

在项目列表页，默认只展示我的项目。我的项目是指当前用户作为项目成员或者所属人参与的项目。

### 项目排序

在项目列表页，支持按照“最近访问”、“项目创建时间由新到旧” 和“项目创建时间由旧到新”展示所有项目，可按照您的需求下拉选择适合您的排序方式。

## 管理项目成员

### 添加成员

1. 鼠标悬浮在需要编辑的项目上，点击 **管理成员**，进入项目成员列表页；
2. 点击右上角 **添加成员** 按钮；
3. 输入 **用户名**，选择用户在项目中的 **项目角色**；
4. 点击 **提交** 完成新增；
5. 如果需要添加多个成员，重复步骤1到4。

### 删除成员

1. 鼠标悬浮在需要编辑的项目上，点击 **管理成员**，进入项目成员列表页；
2. 可通过搜索找到需要删除的用户名，然后点击 **删除** 按钮；
3. 点击 **是** 可将该成员从该项目中删除，点击 **否** 可以取消删除；
4. 如果需要删除多个成员，重复步骤1到3。

### 成员角色编辑

1. 鼠标悬浮在需要编辑的项目上，点击 **管理成员**，进入项目成员列表页；
2. 可通过搜索找到需要调整的用户名，点击 **项目角色**下拉菜单，选择新的项目角色即可。有关角色的更多信息，请参阅[Starwhale中的角色和权限](roles-permissions)
3. 如果需要编辑多个项目成员的校色，重复步骤1到2。

## 删除项目

项目被删除后，该项目下的相关资源（如数据集、模型、运行时和评测等）都将被删除且无法恢复。

1. 进入项目列表页，可通过项目名称搜索，找到需要删除的项目，点击 **删除** 按钮；
2. 按照提示，输入相关内容，点击 **确认** 可删除项目，点击 **取消** 可取消删除。