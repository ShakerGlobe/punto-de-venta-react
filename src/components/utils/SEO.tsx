import { Helmet } from 'react-helmet-async';

// Definimos qué cosas queremos cambiar por página
interface SEOProps {
    title?: string;
    description?: string;
}

export const SEO = ({ title, description }: SEOProps) => {
    // Si no le pasamos un título, usará este por defecto
    const defaultTitle = "NEDIMI POS | Sistema de Gestión y Ventas Inteligente";
    const defaultDesc = "Potencia tu negocio con NEDIMI POS. Control de inventarios y reportes en tiempo real.";

    return (
        <Helmet>
            <title>{title ? `${title} | NEDIMI POS` : defaultTitle}</title>
            <meta name="description" content={description || defaultDesc} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDesc} />
            <meta property="og:image" content="/images/og-image.png" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDesc} />
            <meta name="twitter:image" content="/images/og-image.png" />
        </Helmet>
    );
};