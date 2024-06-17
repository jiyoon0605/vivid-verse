import { getDictionary } from '@/dictionaries/dictionaries';
import { DefaultPageProps } from '@/types';
import SentenceForm from '@/app/[lang]/sentence/_components/SentenceForm';
import { motion } from 'framer-motion';
export default async function Page({ params: { lang } }: DefaultPageProps) {
  const i18n = await getDictionary(lang);

  return (
    <div>
      <h1 className={'mt-12 font-bold text-lg animate-appear-right'}>{i18n.sentence.title}</h1>
      <p className={'mt-3 w-1/2 animate-[appear-right_0.8s_ease-out]'}>{i18n.sentence.description}</p>
      <SentenceForm/>
    </div>
  );
}
