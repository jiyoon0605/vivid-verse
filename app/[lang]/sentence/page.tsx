import { getDictionary } from '@/dictionaries/dictionaries';
import { DefaultPageProps } from '@/types';

export default async function Page({ params: { lang } }: DefaultPageProps) {
  const i18n = await getDictionary(lang);

  return (
    <div>
      <h1>{i18n.sentence.title}</h1>
    </div>
  );
}
