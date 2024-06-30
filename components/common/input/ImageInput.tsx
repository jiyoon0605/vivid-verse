import Image from 'next/image';

import ImageIcon from '@/public/icon/image.svg';

export default function ImageInput() {
  return (
    <div>
      <input accept={'image/*'} alt={''} className={'hidden'} id={'image-input'} type="image" />
      <label
        className={`block w-full h-30 bg-background-100 p-32 
          rounded-lg border-2 border-background-300`}
        htmlFor={'image-input'}
      >
        <Image alt={'image input'} height={100} src={ImageIcon.src} width={100} />
      </label>
    </div>
  );
}
