import React from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

/**
 * Sobrescrita (swizzle) do rodapé padrão do tema clássico, adicionando o
 * selo "Powered by superset-docs-theme" abaixo do rodapé do projeto —
 * mesmo espírito do rodapé customizado do django_docs_theme.
 */
export default function FooterWrapper(props: Props): JSX.Element {
  return (
    <>
      <Footer {...props} />
      <div className="superset-docs-theme-poweredby">
        Construído com{' '}
        <a href="https://github.com/superset-by-kelsoncm/superset-docs-theme" target="_blank" rel="noopener noreferrer">
          superset-docs-theme
        </a>
      </div>
    </>
  );
}
