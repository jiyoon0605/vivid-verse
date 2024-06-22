import { getTranslations } from 'next-intl/server';

import MainSection from '@/app/[locale]/_components/MainSection';

export default async function Page() {
  const t = await getTranslations();

  return (
    <main>
      <MainSection />
    </main>
  );
}
