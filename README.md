# End-to-End DevOps Pipeline

Developer -> GitHub -> GitHub Actions (test, build, push to GHCR) -> Terraform (generates Ansible inventory) -> Ansible (host readiness) -> Kubernetes (Kind) -> Prometheus + Grafana

## Folders
- app/: Node.js Express app with /metrics, tests, Dockerfile
- .github/workflows/: CI pipeline
- terraform/: generates the Ansible inventory
- ansible/: playbook that checks Docker and kubectl
- k8s/: Deployment and Service manifests
- monitoring/: Prometheus and Grafana stack

## Notes
- Images are pushed to GHCR instead of Docker Hub.
- The Kind cluster is local to the Codespace, so the Kubernetes deploy step is run manually.
