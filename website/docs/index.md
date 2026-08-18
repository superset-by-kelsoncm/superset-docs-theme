---
sidebar_position: 1
---

# superset-docs-theme

Um **tema Docusaurus 3 reutilizável** criado para os projetos da organização **superset-by-kelsoncm**. Em vez de adotar Sphinx (como o [django_docs_theme](https://github.com/django-by-kelsoncm/django_docs_theme) faz para os projetos Django), este tema segue a mesma stack usada pela documentação oficial do [Apache Superset](https://superset.apache.org/developer-docs/): **Docusaurus 3**.

O objetivo é manter uma identidade visual padronizada — alinhada à paleta do Design System do Governo Federal do Brasil (DSGovBR) já usada em [superset-theme-dsgovbr](https://github.com/superset-by-kelsoncm/superset-theme-dsgovbr) — em todas as documentações da organização.

## Recursos principais

- 🎨 Paleta padrão inspirada no DSGovBR/Superset (`#1351b4`), com suporte nativo a modo claro/escuro (Infima + `respectPrefersColorScheme`).
- 🧩 Distribuído como plugin Docusaurus (`getClientModules`), aplicável a qualquer site Docusaurus 3 existente.
- 🦶 Selo "Powered by superset-docs-theme" no rodapé (via `themeConfig`, desativável).
- ⚙️ Função utilitária `getDefaultThemeConfig()` para gerar um `themeConfig` padrão (navbar, footer, Prism) em poucas linhas.
- 📦 Publicação automática no npm via GitHub Actions a cada release.

Veja [Instalação](./installation.md) para começar.
