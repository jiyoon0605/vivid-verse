'use client';

import { Chip } from '@nextui-org/chip';
import { useParams, useRouter, useSelectedLayoutSegments } from 'next/navigation';

import { Locale } from '@/i18n-config';

const SENTENCE = 'sentence';
const PARAGRAPH = 'paragraph';

type NavType = 'paragraph' | 'sentence';

interface NavTabProps {
  i18n: typeof import('@/dictionaries/en.json');
}
export default function NavTab({ i18n }: NavTabProps) {
  const params = useParams<{ lang: Locale }>();
  const router = useRouter();
  const segment = useSelectedLayoutSegments();
  const isDisabled = (value: NavType) => {
    return segment.includes(value);
  };

  const onClick = (value: NavType) => {
    router.push(`/${params.lang}/${value}`);
  };

  return (
    <nav className={'my-4 flex gap-2 max-md:justify-center'}>
      <Chip
        className={'cursor-pointer px-5'}
        color={'secondary'}
        isDisabled={isDisabled(SENTENCE)}
        size={'lg'}
        onClick={() => onClick(SENTENCE)}
      >
        {i18n.nav.sentence}
      </Chip>
      <Chip
        className={'cursor-pointer px-5'}
        color={'secondary'}
        isDisabled={isDisabled(PARAGRAPH)}
        size={'lg'}
        onClick={() => onClick(PARAGRAPH)}
      >
        {i18n.nav.paragraph}
      </Chip>
    </nav>
  );
}
