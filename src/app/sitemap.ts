export default async function sitemap() {
  const routes = ['', '/about', '/resume', '/projects', '/uses', '/links'].map((route) => ({
    url: `https://nathanroark.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
