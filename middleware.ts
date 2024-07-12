import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ko', 'ja', 'zh'],
  defaultLocale: 'en',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
