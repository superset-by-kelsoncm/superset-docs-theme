import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import supersetDocsTheme, {getDefaultThemeConfig} from 'superset-docs-theme';

const config: Config = {
  title: 'superset-docs-theme',
  tagline: 'Tema Docusaurus reutilizável para os projetos da organização superset-by-kelsoncm',
  favicon: 'img/favicon.svg',

  url: 'https://superset-by-kelsoncm.github.io',
  baseUrl: '/superset-docs-theme/',

  organizationName: 'superset-by-kelsoncm',
  projectName: 'superset-docs-theme',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
  },

  plugins: [
    [
      supersetDocsTheme,
      {
        primaryColor: '#1351b4',
        secondaryColor: '#2670e8',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/superset-by-kelsoncm/superset-docs-theme/edit/main/website/',
        },
        blog: false,
        theme: {
          customCss: '../src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    ...getDefaultThemeConfig({
      projectName: 'superset-docs-theme',
      githubUrl: 'https://github.com/superset-by-kelsoncm/superset-docs-theme',
      logo: {alt: 'superset-docs-theme', src: 'img/logo.svg'},
      navbarLinks: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Documentação'},
      ],
    }),
  } satisfies Preset.ThemeConfig,
};

export default config;
