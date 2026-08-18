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
        showPoweredBy: true,
      },
    ],
  ],
  themeConfig: {
    ...getDefaultThemeConfig({
      projectName: 'Meu Projeto',
      githubUrl: 'https://github.com/superset-by-kelsoncm/meu-projeto',
      logo: {alt: 'Meu Projeto', src: 'img/logo.svg'},
    }),
  },
};
```

## Opções do plugin (`SupersetDocsThemeOptions`)

| Opção | Padrão | Descrição |
| :--- | :--- | :--- |
| `primaryColor` | `#1351b4` | Cor primária (navbar, links, destaques). |
| `secondaryColor` | `#2670e8` | Cor secundária usada em hover/destaques. |
| `showPoweredBy` | `true` | Exibe o selo "Powered by superset-docs-theme" no rodapé. |

## Opções de `getDefaultThemeConfig()`

| Opção | Descrição |
| :--- | :--- |
| `projectName` | Nome exibido na navbar e no rodapé. |
| `githubUrl` | Link do repositório, exibido na navbar. |
| `logo` | `{ alt, src, srcDark? }` — logo do projeto em `static/img/`. |
| `navbarLinks` | Itens adicionais de navbar (mesclados antes do link do GitHub). |
