import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, keywords, canonical }) {
  const location = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let descMeta = document.querySelector('meta[name="description"]');
      if (!descMeta) {
        descMeta = document.createElement('meta');
        descMeta.setAttribute('name', 'description');
        document.head.appendChild(descMeta);
      }
      descMeta.setAttribute('content', description);
    }

    if (keywords) {
      let kwMeta = document.querySelector('meta[name="keywords"]');
      if (!kwMeta) {
        kwMeta = document.createElement('meta');
        kwMeta.setAttribute('name', 'keywords');
        document.head.appendChild(kwMeta);
      }
      kwMeta.setAttribute('content', keywords);
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const currentCanonical = canonical || `https://www.vericon.in${location.pathname === '/' ? '' : location.pathname}`;
    canonicalLink.setAttribute('href', currentCanonical);

  }, [title, description, keywords, canonical, location]);

  return null;
}

