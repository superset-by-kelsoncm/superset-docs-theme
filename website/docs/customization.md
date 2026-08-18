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

## Sobrescrevendo componentes (swizzle)

Como qualquer tema Docusaurus, os componentes de `superset-docs-theme` podem ser sobrescritos via [swizzle](https://docusaurus.io/docs/swizzling):

```bash
npm run docusaurus swizzle superset-docs-theme Footer -- --wrap
```

## Removendo o selo "Powered by"

```ts
plugins: [[supersetDocsTheme, {showPoweredBy: false}]],
```
