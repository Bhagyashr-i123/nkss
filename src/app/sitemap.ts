import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ieeenkss-sac.org';

  const routes = [
    '',
    '/about',
    '/team',
    '/events',
    '/directory',
    '/verify',
    '/resources',
    '/achievements',
    '/gallery',
    '/announcements',
    '/contact',
    '/admin',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
