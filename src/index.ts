import path from 'path';
import type {LoadContext, Plugin} from '@docusaurus/types';

export interface SupersetDocsThemeOptions {
  /** Cor primária da identidade visual (padrão: azul DSGovBR/Superset). */
  primaryColor?: string;
  /** Cor secundária usada em hover/destaques. */
  secondaryColor?: string;
  /** Exibe o link "Powered by superset-docs-theme" no rodapé. */
  showPoweredBy?: boolean;
}

const DEFAULT_OPTIONS: Required<SupersetDocsThemeOptions> = {
  primaryColor: '#1351b4',
  secondaryColor: '#2670e8',
  showPoweredBy: true,
};

/**
 * Plugin de tema Docusaurus 3 reutilizável entre os repositórios de
 * documentação da organização superset-by-kelsoncm.
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

    getThemePath() {
      return path.resolve(__dirname, 'theme');
    },

    getTypeScriptThemePath() {
      return path.resolve(__dirname, '..', 'src', 'theme');
    },

    getClientModules() {
      return [path.resolve(__dirname, 'css', 'custom.css')];
    },

    async contentLoaded({actions}) {
      actions.setGlobalData(resolvedOptions);
    },

    configureWebpack() {
      return {
        resolve: {
          alias: {
            '@superset-docs-theme/css': path.resolve(__dirname, 'css'),
          },
        },
      };
    },
  };
}

export {default as getDefaultThemeConfig} from './themeConfig';
export type {SupersetThemeConfigOptions} from './themeConfig';
