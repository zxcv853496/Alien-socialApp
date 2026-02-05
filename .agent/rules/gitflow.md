---
name: gitflow-enforcement
description: Enforces Gitflow workflow (feature branches) for new features and pushes.
---

# Gitflow Enforcement Rule

You must strictly follow the **Gitflow Workflow** when the user asks to implement a new feature or push code.

## Rules

1.  **New Features**:
    *   **NEVER** commit directly to `develop` or `main` / `master` for new features.
    *   **ALWAYS** create a new feature branch from `develop`.
    *   **Naming Convention**: `feature/<feature-name-kebab-case>`
        *   Example: `feature/user-authentication`, `feature/add-payment-gateway`
    *   **Command**: `git checkout -b feature/<name> develop`

2.  **Pushing Code**:
    *   When the user asks to "push", push the **current feature branch** to `origin`.
    *   **Command**: `git push -u origin feature/<name>`
    *   Do **NOT** merge into `develop` locally unless explicitly asked. The standard flow is to push the feature branch and let the user handle the Pull Request (PR), or ask the user if they want you to merge it.

3.  **Bug Fixes**:
    *   Use `fix/<bug-name>` branching from `develop`.

4.  **Hotfixes** (Production bugs):
    *   Use `hotfix/<bug-name>` branching from `main`.

## Exceptions
*   If the user specifically asks to "commit directly" or "ignore gitflow", you may override this rule for that specific turn, but warn them first.
