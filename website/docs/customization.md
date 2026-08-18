---
sidebar_position: 4
---

# Customização

## Sobrescrevendo cores

Cada projeto pode sobrescrever as variáveis Infima no seu próprio `custom.css`, carregado **depois** do `superset-docs-theme` na configuração do preset clássico:

```css
:root {
  --ifm-color-primary: #005588; /* nova cor primária */
}
```

## Sobrescrevendo o rodapé

`getDefaultThemeConfig()` só define um valor inicial para `themeConfig.footer` — como qualquer configuração do Docusaurus, basta espalhar (`...`) o retorno e sobrescrever o que for necessário:

```ts
themeConfig: {
  ...getDefaultThemeConfig({
    projectName: 'Meu Projeto',
    githubUrl: 'https://github.com/superset-by-kelsoncm/meu-projeto',
  }),
  footer: {
    style: 'dark',
    links: [/* seus próprios links */],
    copyright: 'Copyright © Meu Projeto',
  },
},
```

## Removendo o selo "Powered by"

```ts
getDefaultThemeConfig({
  // ...
  showPoweredBy: false,
})
```
