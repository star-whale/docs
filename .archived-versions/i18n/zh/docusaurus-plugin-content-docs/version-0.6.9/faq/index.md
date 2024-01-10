---
title: 常见问题
---

## Starwhale Model 拷贝到 Server 时遇到 "413 Client Error: Request Entity Too Large for url" 错误

- 原因：Ingress 设置的 proxy-body-size（Nginx默认为1MB）小于实际上传文件的大小。
- 解决方法：请检查 Starwhale Server 的 Ingress 设置，增加 `nginx.ingress.kubernetes.io/proxy-body-size: 30g` 到 annotations 字段中。

## Starwhale Server 向 Kubernetes 集群中提交任务提示 RBAC 授权错误

Kubernetes 集群启动了 RBAC，启动 Starwhale Server 的服务账号权限不足，至少需要如下权限：

| Resource | API Group | Get | List | Watch | Create | Delete |
|----------|-----------|-----|------|-------|--------|--------|
| jobs     | batch     | Y   | Y    | Y     | Y      | Y      |
| pods     | core      | Y   | Y    | Y     |        |        |
| nodes    | core      | Y   | Y    | Y     |        |        |
| events   | ""        | Y   |      |       |        |        |

参考yaml例子：

```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: starwhale-role
rules:
- apiGroups:
  - ""
  resources:
  - pods
  - nodes
  verbs:
  - get
  - list
  - watch
- apiGroups:
  - "batch"
  resources:
  - jobs
  verbs:
  - create
  - get
  - list
  - watch
  - delete
- apiGroups:
  - ""
  resources:
  - events
  verbs:
  - get
  - watch
  - list
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: starwhale-binding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: starwhale-role
subjects:
- kind: ServiceAccount
  name: starwhale
```
