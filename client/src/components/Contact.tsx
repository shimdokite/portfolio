import Image from 'next/image';

import { CONTACT_ICONS, CONTACT_INFO } from '@/constants/contact';

interface ContactProps {
  type: 'phone' | 'github' | 'mail' | 'tistory';
}

export default function Contact({ type }: ContactProps) {
  const tooltip = type === 'phone' || type === 'mail';
  return (
    <div className="relative group">
      <div className="cursor-pointer w-10 h-10 border-blue-70 rounded-full bg-blue-70 flex justify-center items-center">
        <Image
          src={CONTACT_ICONS[type]}
          alt={`${type} icon`}
          width={type === 'tistory' ? 20 : 25}
          height={type === 'tistory' ? 20 : 25}
        />
      </div>

      <div
        className={`${
          tooltip &&
          'hidden rounded-md bg-black-10 group-hover:flex justify-center items-center z-[20] absolute top-[-100%] left-[50%] translate-x-[-50%]'
        }`}>
        <div
          className="px-[7px] py-1 flex justify-center items-center w-full whitespace-nowrap text-sm text-center"
          title="contact-tooltip"
          role="tooltip">
          {CONTACT_INFO[type]}
        </div>
      </div>
    </div>
  );
}
