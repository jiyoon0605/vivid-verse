import type { Locale } from '@/i18n-config';

export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  return <div> {lang}</div>;
}
