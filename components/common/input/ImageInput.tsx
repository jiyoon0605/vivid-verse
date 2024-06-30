import Image from 'next/image';
import { ChangeEvent, useState } from 'react';

import ImageIcon from '@/public/icon/image.svg';

interface ImageInputProps {
  onFileChange: (file: File | null) => void;
}

export default function ImageInput({ onFileChange }: ImageInputProps) {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const onChange = (e: ChangeEvent) => {
    const file = (e.target as HTMLInputElement).files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setPreviewImage(e.target.result as string);
        }
      };

      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }

    onFileChange(file ?? null);
  };

  return (
    <div>
      <input
        accept={'image/*'}
        alt={''}
        className={'hidden'}
        id={'image-input'}
        type="file"
        onChange={onChange}
      />
      <label
        className={`flex justify-center 
        w-full min-h-52 bg-background-100
        object-cover overflow-hidden 
          rounded-lg border-2 border-background-300`}
        htmlFor={'image-input'}
      >
        <Image
          alt={'image input'}
          className={'w-auto h-auto'}
          height={100}
          layout={'intrinsic'}
          src={previewImage ?? ImageIcon.src}
          unoptimized={true}
          width={100}
        />
      </label>
    </div>
  );
}
