---
title: Starwhale中的角色和权限
---

角色用于为用户分配权限。只有Starwhale Server/Cloud有角色和权限，Starwhale Standalone没有相应概念。系统会自动创建一个管理员角色并分配给默认用户“starwhale”。一些敏感操作只能由具有管理员角色的用户执行，例如在Starwhale Server中创建新的账号。

每个项目具有三类角色：

* 管理员Admin - 项目管理员可以读写项目数据并将项目角色分配给用户。
* 维护者Maintainer - 项目维护者可以读写项目数据。
* 访客Guest - 项目访客只能读取项目数据。

| 动作 | 管理员Admin | 维护者Maintainer | 访客Guest |
| --- | --- | --- | ---- |
| 管理项目成员 | 是 | | |
| 编辑项目 | 是 | 是 | |
| 查看项目 | 是 | 是 | 是 |
| 创建评价 | 是 | 是 | |
| 删除评价 | 是 | 是 | |
| 查看评价 | 是 | 是 | 是 |
| 创建数据集 | 是 | 是 | |
| 更新数据集 | 是 | 是 | |
| 删除数据集 | 是 | 是 | |
| 查看数据集 | 是 | 是 | 是 |
| 创建模型 | 是 | 是 | |
| 更新模型 | 是 | 是 | |
| 删除模型 | 是 | 是 | |
| 查看型号 | 是 | 是 | 是 |
| 创建运行时 | 是 | 是 | |
| 更新运行时间 | 是 | 是 | |
| 删除运行时 | 是 | 是 | |
| 查看运行时间 | 是 | 是 | 是 |

创建项目的用户成为第一个项目管理员。他可以在这之后将角色分配给其他用户。
