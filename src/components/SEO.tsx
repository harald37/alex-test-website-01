import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  noindex?: boolean;
  image?: string;
  schema?: object;
}

const DEFAULT_OG_IMAGE = "https://res.cloudinary.com/alexbegopoulos/image/upload/f_auto,q_auto:best,w_1200/v1775495575/hochzeitstanz-im-eigenen-garten-bei-nacht-mit-kuss-hannover.webp";

export function SEO({ 
  title, 
  description, 
  noindex = false,
  image = DEFAULT_OG_IMAGE,
  schema
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
