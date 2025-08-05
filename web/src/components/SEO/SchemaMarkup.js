import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup = ({ type, data }) => {
    const generateSchema = () => {
        switch (type) {
            case 'article':
                return {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": data.title,
                    "description": data.description,
                    "datePublished": data.datePublished || new Date().toISOString(),
                    "dateModified": data.dateModified || new Date().toISOString(),
                    "author": {
                        "@type": "Organization",
                        "name": "CaptiOCR"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "CaptiOCR",
                        "url": "https://www.captiocr.com"
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": data.url || 'https://www.captiocr.com'
                    }
                };
            
            case 'howto':
                return {
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": data.title,
                    "description": data.description,
                    "step": data.steps?.map((step, index) => ({
                        "@type": "HowToStep",
                        "position": index + 1,
                        "name": step.name,
                        "text": step.text
                    })) || []
                };
            
            case 'breadcrumb':
                return {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": data.items?.map((item, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "name": item.name,
                        "item": item.url
                    })) || []
                };
            
            default:
                return null;
        }
    };

    const schema = generateSchema();
    
    if (!schema) return null;

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default SchemaMarkup;