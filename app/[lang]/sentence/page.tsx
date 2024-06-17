import { getDictionary } from '@/dictionaries/dictionaries';
import { DefaultPageProps } from '@/types';
import CommonTextArea from '@/components/common/input/CommonTextArea';

export default async function Page({params: {lang}}: DefaultPageProps) {
  const i18n = await getDictionary(lang);
  
  return (
    <div>
      <h1 className={'mt-12 font-bold text-lg'}>{i18n.sentence.title}</h1>
      <p className={'mt-5 w-1/2'}>{i18n.sentence.description}</p>
    </div>
  );
}
