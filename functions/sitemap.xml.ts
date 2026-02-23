interface BlogAnalysisSummary {
  id: string;
  blogUrl: string;
  createdAt: string;
}

interface ArticlesResponse {
  analyses: BlogAnalysisSummary[];
  total: number;
  hasMore: boolean;
}

const SITE_URL = 'https://blog-analyzer.pages.dev';
const BACKEND_URL = 'https://blog-ai-analyzer.euijinkk97.workers.dev';

const STATIC_ROUTES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/gallery', changefreq: 'daily', priority: '0.8' },
  { path: '/report', changefreq: 'weekly', priority: '0.7' },
  { path: '/about', changefreq: 'monthly', priority: '0.5' },
  { path: '/contact', changefreq: 'monthly', priority: '0.5' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms-of-service', changefreq: 'yearly', priority: '0.3' },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatDate(isoString: string): string {
  return isoString.split('T')[0];
}

export const onRequestGet: PagesFunction = async () => {
  const today = new Date().toISOString().split('T')[0];

  // Fetch all articles from backend
  let articles: BlogAnalysisSummary[] = [];
  try {
    const res = await fetch(`${BACKEND_URL}/articles?limit=100&sort=latest`);
    if (res.ok) {
      const data = (await res.json()) as ArticlesResponse;
      articles = data.analyses ?? [];
    }
  } catch {
    // If backend fails, proceed with static routes only
  }

  // Build XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Static routes
  for (const route of STATIC_ROUTES) {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  }

  // Dynamic report pages
  for (const article of articles) {
    const loc = `${SITE_URL}/report?blog-url=${escapeXml(encodeURI(article.blogUrl))}`;
    const lastmod = article.createdAt ? formatDate(article.createdAt) : today;
    xml += '  <url>\n';
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.6</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>';

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
};
