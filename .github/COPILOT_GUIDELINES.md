# Copilot Prompts & Guidelines

This document provides instructions and context for GitHub Copilot (or other AI assistants) when interacting with this project.  
Its purpose is to ensure consistent commit messages and improve code-related suggestions.

---

## 🎯 Conventional Commits — Required Format

All commit messages generated must strictly follow the **Conventional Commits** specification:  
https://www.conventionalcommits.org/en/v1.0.0/

### **Commit Message Structure**

```bash
<type>(optional scope): <short description>

(optional body)

(optional footer)
```

### **Allowed Types**
- `feat` — a new feature  
- `fix` — a bug fix  
- `docs` — documentation only  
- `style` — formatting, no code logic changes  
- `refactor` — code restructure without changing behavior  
- `test` — adding or updating tests  
- `perf` — performance improvements  
- `build` — build system or external dependencies  
- `ci` — CI/CD configuration modifies  
- `chore` — maintenance tasks  
- `revert` — revert a previous commit  

---

## ✅ Examples

```bash
feat(auth): add JWT token refresh flow

fix(ui): handle null pointer exception on profile image

docs(readme): update project setup instructions

refactor(api): simplify response parser logic
```

---

## 📌 Guidelines for Copilot

When generating commit messages:

1. Always follow the **Conventional Commits** structure.
2. Use **imperative present tense** (e.g., "add", "fix", "update").
3. Prefer **short and clear** descriptions.
4. Add a body only when necessary to explain why the change was made.
5. Include a scope when it adds clarity (e.g., `auth`, `api`, `ui`).

---
