import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, getSeoByPath, normalizePathname } from '../data/seoRoutes';

function upsertMetaTag(attrName, attrValue, content) {
  if (!content) return;
  const selector = `meta[${attrName}="${attrValue}"]`;
  let metaEl = document.querySelector(selector);
  if (!metaEl) {
    metaEl = document.createElement('meta');
    metaEl.setAttribute(attrName, attrValue);
    document.head.appendChild(metaEl);
  }
  metaEl.setAttribute('content', content);
}

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  noindex = false,
}) {
  const location = useLocation();

  useEffect(() => {
    const normalizedPath = normalizePathname(location.pathname);
    const routeMeta = getSeoByPath(normalizedPath);

    const resolvedTitle = title || routeMeta?.title;
    const resolvedDescription = description || routeMeta?.description;
    const resolvedKeywords = keywords || routeMeta?.keywords;
    const resolvedCanonical =
      canonical ||
      routeMeta?.canonical ||
      `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`;

    if (resolvedTitle) {
      document.title = resolvedTitle;
    }

    upsertMetaTag('name', 'description', resolvedDescription);
    upsertMetaTag('name', 'keywords', resolvedKeywords);
    upsertMetaTag(
      'name',
      'robots',
      noindex
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (noindex) {
      if (canonicalLink) canonicalLink.remove();
    } else {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', resolvedCanonical);
    }

    upsertMetaTag('property', 'og:url', resolvedCanonical);
    upsertMetaTag('property', 'og:title', resolvedTitle);
    upsertMetaTag('property', 'og:description', resolvedDescription);

    upsertMetaTag('name', 'twitter:url', resolvedCanonical);
    upsertMetaTag('name', 'twitter:title', resolvedTitle);
    upsertMetaTag('name', 'twitter:description', resolvedDescription);
  }, [title, description, keywords, canonical, noindex, location.pathname]);

  return null;
}
