'use client';

import { Chip } from '@nextui-org/chip';
import { useParams, useRouter, useSelectedLayoutSegments } from 'next/navigation';
import { Locale } from '@/i18n-config';

const SENTENCE = 'sentence';
const PARAGRAPH = 'paragraph';
type NavType = 'paragraph' | 'sentence';
export default function NavTab({ i18n }: any) {
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
        size={'lg'}
        className={'cursor-pointer'}
        color={'secondary'}
        isDisabled={isDisabled(SENTENCE)}
        onClick={() => onClick(SENTENCE)}
      >
        {i18n.nav.sentence}
      </Chip>
      <Chip
        size={'lg'}
        className={'cursor-pointer'}
        color={'secondary'}
        isDisabled={isDisabled(PARAGRAPH)}
        onClick={() => onClick(PARAGRAPH)}
      >
        {i18n.nav.paragraph}
      </Chip>
    </nav>
  );
}
