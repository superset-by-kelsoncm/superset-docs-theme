---
sidebar_position: 3
---

# Configuração básica

No `docusaurus.config.ts` do seu projeto:

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

## Opções do plugin (`SupersetDocsThemeOptions`)

| Opção | Padrão | Descrição |
| :--- | :--- | :--- |
| `primaryColor` | `#1351b4` | Cor primária (navbar, links, destaques). |
| `secondaryColor` | `#2670e8` | Cor secundária usada em hover/destaques. |

## Opções de `getDefaultThemeConfig()`

| Opção | Padrão | Descrição |
| :--- | :--- | :--- |
| `projectName` | — | Nome exibido na navbar e no rodapé. |
| `githubUrl` | — | Link do repositório, exibido na navbar. |
| `logo` | — | `{ alt, src, srcDark? }` — logo do projeto em `static/img/`. |
| `navbarLinks` | `[]` | Itens adicionais de navbar (mesclados antes do link do GitHub). |
| `showPoweredBy` | `true` | Inclui "Construído com superset-docs-theme" no copyright do rodapé. |
