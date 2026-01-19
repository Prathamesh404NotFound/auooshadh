import { Helmet } from 'react-helmet-async';

interface SEOMetaTagsProps {
    title?: string;
    description?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    noindex?: boolean;
    jsonLd?: Record<string, any>[];
}

const baseUrl = 'https://auooshadh.com';
const defaultTitle = 'Auooshadh - Digital Healthcare Platform | Online Medicine & Doctor Consultation';
const defaultDescription = 'Auooshadh is India\'s leading digital healthcare platform. Order medicines online, consult doctors, book diagnostic tests, and manage prescriptions digitally. Fast, secure, and affordable healthcare at your fingertips.';

export const SEOMetaTags = ({
    title = defaultTitle,
    description = defaultDescription,
    canonical = '',
    ogImage = '/src/assets/logo.jpeg',
    ogType = 'website',
    noindex = false,
    jsonLd = []
}: SEOMetaTagsProps) => {
    const fullTitle = title === defaultTitle ? title : `${title} | Auooshadh`;
    const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Auooshadh",
        "url": baseUrl,
        "logo": `${baseUrl}/src/assets/logo.jpeg`,
        "description": "India's leading digital healthcare platform for online medicine ordering, doctor consultation, and diagnostic booking",
        "sameAs": [
            "https://twitter.com/auooshadh",
            "https://linkedin.com/company/auooshadh",
            "https://facebook.com/auooshadh"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Auooshadh",
        "url": baseUrl,
        "description": "Digital healthcare platform for online medicine ordering, doctor consultation, and diagnostic booking in India",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    const allSchemas = [organizationSchema, websiteSchema, ...jsonLd];

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="author" content="Auooshadh" />
            <meta name="keywords" content="online medicine, doctor consultation, digital healthcare, pharmacy platform, diagnostic booking, prescription management, telemedicine, healthcare India" />

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Robots */}
            {noindex && <meta name="robots" content="noindex, nofollow" />}
            {!noindex && <meta name="robots" content="index, follow, max-image-preview:large" />}

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={`${baseUrl}${ogImage}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Auooshadh" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@auooshadh" />
            <meta name="twitter:creator" content="@auooshadh" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

            {/* Additional Meta Tags */}
            <meta name="language" content="English" />
            <meta name="geo.region" content="IN" />
            <meta name="geo.placename" content="India" />
            <meta name="ICBM" content="20.5937,78.9629" />

            {/* Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Structured Data */}
            {allSchemas.map((schema, index) => (
                <script key={index} type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            ))}
        </Helmet>
    );
};
