import path from 'path';
import type {LoadContext, Plugin} from '@docusaurus/types';

export interface SupersetDocsThemeOptions {
  /** Cor primária da identidade visual (padrão: azul DSGovBR/Superset). */
  primaryColor?: string;
  /** Cor secundária usada em hover/destaques. */
  secondaryColor?: string;
}

const DEFAULT_OPTIONS: Required<SupersetDocsThemeOptions> = {
  primaryColor: '#1351b4',
  secondaryColor: '#2670e8',
};

/**
 * Plugin de tema Docusaurus 3 reutilizável entre os repositórios de
 * documentação da organização superset-by-kelsoncm. Injeta apenas o CSS
 * de design tokens (client module global) — não sobrescreve componentes
 * via getThemePath, para evitar a recursão de alias `@theme-original`
 * observada ao empilhar plugins de tema com o preset clássico.
 *
 * Uso em `docusaurus.config.ts`:
 *
 * ```ts
 * import supersetDocsTheme from 'superset-docs-theme';
 *
 * export default {
 *   plugins: [[supersetDocsTheme, { primaryColor: '#1351b4' }]],
 * };
 * ```
 */
export default function supersetDocsTheme(
  context: LoadContext,
  options: SupersetDocsThemeOptions = {},
): Plugin<void> {
  const resolvedOptions = {...DEFAULT_OPTIONS, ...options};

  return {
    name: 'superset-docs-theme',

    getClientModules() {
      return [path.resolve(__dirname, 'css', 'custom.css')];
    },

    async contentLoaded({actions}) {
      actions.setGlobalData(resolvedOptions);
    },
  };
}

export {default as getDefaultThemeConfig} from './themeConfig';
export type {SupersetThemeConfigOptions} from './themeConfig';
