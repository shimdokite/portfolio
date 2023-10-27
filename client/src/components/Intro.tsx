import Image from 'next/image';
import Contacts from './Contacts';

import { INTRO_TEXT } from '@/constants/intro';

export default function Intro() {
  return (
    <div className="h-[658px] flex justify-center items-center">
      <div className="mt-14 w-[48%] flex flex-col items-start gap-4">
        <h1 className="text-[44px] leading-tight font-bold whitespace-pre-line">
          {INTRO_TEXT.title}
        </h1>

        <h2 className="font-normal whitespace-pre-line mb-5">
          {INTRO_TEXT.description}
        </h2>

        <Contacts component="intro" />
      </div>

      <Image
        src="/assets/image/profile.png"
        alt="profile image"
        width={243}
        height={243}
        className="drop-shadow-imageShadow"
      />
    </div>
  );
}
