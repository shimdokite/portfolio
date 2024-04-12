import Image from 'next/image';

import Contacts from './Contacts';

import { INTRO_TEXT } from '@/constants/intro';

export default function Intro() {
  return (
    <div className="w-full h-[690px] flex justify-center items-center max-[480px]:flex max-[480px]:flex-col max-[450px]:h-[812px]">
      <Image
        src="/assets/image/profile.png"
        alt="profile image"
        width={250}
        height={250}
        className="rounded-full min-w-[150px] min-h-[150px] drop-shadow-imageShadow mx-2 min-[480px]:hidden"
      />

      <section className="mt-14 w-[45%] flex flex-col items-start gap-4 mx-2 max-[480px]:w-[90%]">
        <h1 className="text-[44px] max-[700px]:text-[34px] max-[550px]:text-[24px] max-[480px]:text-[22px] leading-tight font-bold whitespace-pre-line">
          {INTRO_TEXT.title}
        </h1>

        <h2 className="max-[660px]:text-[13px] max-[550px]:text-[12px] font-normal whitespace-pre-line mb-5 mr-[10px]">
          &nbsp;{INTRO_TEXT.description}
        </h2>

        <div className="w-full flex justify-between items-center">
          <Contacts component="intro" />
        </div>
      </section>

      <Image
        src="/assets/image/profile.png"
        alt="profile image"
        width={250}
        height={250}
        className="rounded-full drop-shadow-imageShadow mx-2 max-[480px]:hidden"
      />
    </div>
  );
}
