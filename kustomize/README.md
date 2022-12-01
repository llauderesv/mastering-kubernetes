# Using Kustomize for hierarchical build

Kuztomize is a plugin in Kubernetes that allows you to templates your YAML to work with multiple environments make it parameterized in a much more configurable way compared to Helm.

## Deploying Kustomization

In order to deploy that YAML files inside the kustomization there are two ways that you can do.

```bash
kubectl kustomize <kustomization_directory>
```

Or you can prefix the kustomize keyword by using -k flag in Kubernetes like so:

```bash
kubectl apply -k <kustomization_directory>
```