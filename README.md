# Superset-inspired theme for Docusaurus

Um **tema/preset Docusaurus 3 reutilizável** criado para os projetos de documentação da organização **superset-by-kelsoncm**. Em vez de Sphinx (usado pelo [django_docs_theme](https://github.com/django-by-kelsoncm/django_docs_theme) na organização `django-by-kelsoncm`), este tema segue a mesma stack da documentação oficial do [Apache Superset](https://superset.apache.org/developer-docs/): **Docusaurus 3**.

![Node](https://img.shields.io/badge/node-18%2B-blue)
![Docusaurus](https://img.shields.io/badge/docusaurus-3.x-green)
![CI & Docs](https://github.com/superset-by-kelsoncm/superset-docs-theme/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-Apache%202.0-blue)

---

## 🚀 Recursos Principais

- 🎨 **Paleta padrão inspirada no DSGovBR/Superset** (`#1351b4`), alinhada ao [superset-theme-dsgovbr](https://github.com/superset-by-kelsoncm/superset-theme-dsgovbr).
- 🌙 **Modo Escuro (Dark Mode)**: suporte nativo via Infima, com `respectPrefersColorScheme`.
- ⚙️ **Customização Simples**: cores, logo e links de navbar configuráveis via `docusaurus.config.ts`.
- 🦶 **Selo "Powered by superset-docs-theme"** no rodapé, via `themeConfig` (desativável).
- 🧩 **Distribuído como plugin Docusaurus**: injeta o CSS globalmente via `getClientModules`.
- 📦 **Automação npm & GitHub Actions**: publicação automática no npm a cada release (com provenance), build e deploy dos docs no GitHub Pages via Actions.

---

## 🛠️ Instalação

### Via npm

```bash
npm install superset-docs-theme
```

### Desenvolvimento Local

```bash
git clone https://github.com/superset-by-kelsoncm/superset-docs-theme.git
cd superset-docs-theme
npm install
npm run build          # compila src/ (TypeScript) para lib/
npm run website:start  # roda o site de exemplo (website/) usando o tema local
```

---

## ⚙️ Configuração Básica no `docusaurus.config.ts`

```ts
import supersetDocsTheme, {getDefaultThemeConfig} from 'superset-docs-theme';

export default {
  // ...
  plugins: [
    [
      supersetDocsTheme,
      {
        primaryColor: '#1351b4',
        secondaryColor: '#2670e8',
      },
    ],
  ],
  themeConfig: {
    ...getDefaultThemeConfig({
      projectName: 'Meu Projeto',
      githubUrl: 'https://github.com/superset-by-kelsoncm/meu-projeto',
      logo: {alt: 'Meu Projeto', src: 'img/logo.svg'},
      showPoweredBy: true,
    }),
  },
};
```

---

## 🎨 Opções de Customização

### Plugin (`SupersetDocsThemeOptions`)

| Opção | Padrão | Descrição |
| :--- | :--- | :--- |
| `primaryColor` | `#1351b4` | Cor primária (navbar, links, destaques). |
| `secondaryColor` | `#2670e8` | Cor secundária usada em hover/destaques. |

### `getDefaultThemeConfig()`

| Opção | Padrão | Descrição |
| :--- | :--- | :--- |
| `projectName` | — | Nome exibido na navbar e no rodapé. |
| `githubUrl` | — | Link do repositório, exibido na navbar. |
| `logo` | — | `{ alt, src, srcDark? }` — logo do projeto em `static/img/`. |
| `navbarLinks` | `[]` | Itens adicionais de navbar (mesclados antes do link do GitHub). |
| `showPoweredBy` | `true` | Inclui "Construído com superset-docs-theme" no copyright do rodapé. |

---

## 💅 Sobrescrevendo Estilos

Cada projeto pode sobrescrever as variáveis Infima no seu próprio `custom.css`, carregado depois do `superset-docs-theme`:

```css
:root {
  --ifm-color-primary: #005588; /* nova cor primária */
}
```

---

## 📁 Estrutura do Repositório

```
superset-docs-theme/
├── .github/
│   ├── dependabot.yml         # npm (raiz + website/) e github-actions
│   ├── ISSUE_TEMPLATE/
│   ├── pull_request_template.md
│   └── workflows/
│       ├── ci.yml             # type-check, build e deploy dos docs no GitHub Pages
│       └── publish-npm.yml    # publicação automática no npm a cada release
├── src/                       # código-fonte do plugin/tema (TypeScript)
│   ├── index.ts                # plugin Docusaurus (getClientModules)
│   ├── themeConfig.ts          # helper getDefaultThemeConfig() (navbar/footer/prism)
│   └── css/custom.css          # design tokens (paleta DSGovBR/Superset)
├── website/                   # documentação oficial do tema (dogfooding)
│   ├── docusaurus.config.ts
│   ├── sidebars.ts
│   ├── docs/
│   │   ├── index.md
│   │   ├── installation.md
│   │   ├── configuration.md
│   │   └── customization.md
│   └── static/img/
├── package.json                # empacotamento npm (superset-docs-theme)
├── tsconfig.json
├── LICENSE
└── README.md
```

---

## 🤖 GitHub Workflows

Este repositório está configurado com automação completa via GitHub Actions:

### 1. CI & Deploy Docs (`.github/workflows/ci.yml`)
- Disparado a cada `push`/`pull_request` na branch `main`.
- Instala e type-checka o tema, builda `src/` (`tsc`) e builda o site de exemplo (`website/`).
- Faz o deploy automático da documentação no **GitHub Pages** (fonte: Actions).

### 2. Publicação Automática no npm (`.github/workflows/publish-npm.yml`)
- Disparado sempre que uma nova **Release** é publicada no GitHub (`on: release`).
- Publica com `npm publish --provenance --access public`, usando o segredo `NPM_TOKEN`.

---

## 📄 Licença

Este projeto está licenciado sob a Apache License 2.0. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
