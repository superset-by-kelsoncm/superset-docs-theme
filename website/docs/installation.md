---
sidebar_position: 2
---

# Instalação

## Pré-requisitos

- Node.js 18+
- Um projeto [Docusaurus 3](https://docusaurus.io/) já criado (`npx create-docusaurus@latest`)

## Via npm

```bash
npm install superset-docs-theme
```

## Desenvolvimento local (dentro deste repositório)

```bash
git clone https://github.com/superset-by-kelsoncm/superset-docs-theme.git
cd superset-docs-theme
npm install
npm run build          # compila src/ (TypeScript) para lib/
npm run website:start  # roda o site de exemplo em website/, usando o tema local
```
