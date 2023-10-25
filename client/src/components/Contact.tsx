'use client';

import Image from 'next/image';

import { CONTACT_ICONS, CONTACT_INFO } from '@/constants/contact';

interface ContactProps {
  type: 'phone' | 'github' | 'mail' | 'tistory';
}

export default function Contact({ type }: ContactProps) {
  const tooltip = type === 'phone' || type === 'mail';

  const onClipBoard = (type: string) => {
    const phoneNumber = CONTACT_INFO.phone;

    if (type === 'phone') {
      navigator.clipboard.writeText(phoneNumber as string);
      alert('클립보드에 복사되었습니다 :)');
    }
  };

  return (
    <div className="relative group">
      <button
        type="button"
        className="cursor-pointer w-10 h-10 border-blue-70 rounded-full bg-blue-70 flex justify-center items-center"
        onClick={() => onClipBoard(type)}>
        <Image
          src={CONTACT_ICONS[type]}
          alt={`${type} icon`}
          width={type === 'tistory' ? 20 : 25}
          height={type === 'tistory' ? 20 : 25}
        />
      </button>

      <div
        className={`${
          tooltip &&
          'hidden rounded-md bg-black-10 group-hover:flex justify-center items-center z-[20] absolute top-[-90%] left-[50%] translate-x-[-50%]'
        }`}>
        <p
          className="px-[7px] py-1 flex justify-center items-center w-full whitespace-nowrap text-sm text-center"
          role="tooltip">
          {CONTACT_INFO[type]}
        </p>
      </div>
    </div>
  );
}
