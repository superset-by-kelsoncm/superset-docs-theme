export interface SupersetThemeConfigOptions {
  projectName: string;
  githubUrl: string;
  logo?: {
    alt: string;
    src: string;
    srcDark?: string;
  };
  navbarLinks?: Array<Record<string, unknown>>;
}

/**
 * Gera um bloco `themeConfig` padrão para `docusaurus.config.ts`, análogo
 * ao `html_theme_options` do django_docs_theme: navbar, footer e cores
 * alinhadas à identidade visual da organização (azul DSGovBR/Superset),
 * com suporte nativo a modo claro/escuro via Infima.
 */
export default function getDefaultThemeConfig(options: SupersetThemeConfigOptions) {
  const {projectName, githubUrl, logo, navbarLinks = []} = options;

  return {
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: projectName,
      logo,
      items: [
        ...navbarLinks,
        {
          href: githubUrl,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Comunidade',
          items: [
            {label: 'Organização no GitHub', href: 'https://github.com/superset-by-kelsoncm'},
            {label: 'Apache Superset', href: 'https://superset.apache.org'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${projectName}. Construído com superset-docs-theme.`,
    },
    prism: {
      additionalLanguages: ['python', 'bash', 'json', 'yaml'],
    },
  };
}
