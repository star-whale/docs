---
title: FAQs
---

## Error "413 Client Error: Request Entity Too Large" when Copying Starwhale Models to Server

- Cause: The proxy-body-size set in the Ingress (Nginx default is 1MB) is smaller than the actual uploaded file size.
- Solution: Check the Ingress configuration of the Starwhale Server and add `nginx.ingress.kubernetes.io/proxy-body-size: 30g` to the annotations field.

## RBAC Authorization Error when Starwhale Server Submits Jobs to Kubernetes Cluster

The Kubernetes cluster has RBAC enabled, and the service account for the Starwhale Server does not have sufficient permissions. It requires at least the following permissions:

| Resource | API Group | Get | List | Watch | Create | Delete |
|----------|-----------|-----|------|-------|--------|--------|
| jobs     | batch     | Y   | Y    | Y     | Y      | Y      |
| pods     | core      | Y   | Y    | Y     |        |        |
| nodes    | core      | Y   | Y    | Y     |        |        |
| events   | ""        | Y   |      |       |        |        |

Example YAML:

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
