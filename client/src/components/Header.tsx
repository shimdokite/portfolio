'use client';

import Image from 'next/image';
import { useState } from 'react';

import { HeaderNav } from '.';

import getScrollForward from '../../utils/getScrollForward';

export default function Header() {
  const [isMenuHover, setIsMenuHover] = useState(false);
  const [seleceted, setSeleceted] = useState('');

  const handleScroll = (type: string) => {
    const top = getScrollForward(type);

    scroll({ top, behavior: 'smooth' });
    setSeleceted(type);
  };

  return (
    <header>
      <div className="w-full h-[70px] bg-white-10 fixed flex justify-end items-center shadow-down z-50">
        <ul>
          <li
            onMouseOver={() => setIsMenuHover(true)}
            onMouseLeave={() => setIsMenuHover(false)}>
            <Image
              src={'/assets/icon/menu.svg'}
              alt="메뉴"
              width={30}
              height={18}
              className="cursor-pointer min-[450px]:hidden mr-5"
            />

            {isMenuHover && <HeaderNav isMenuHover={isMenuHover} />}
          </li>
        </ul>

        <ul className="h-[28px] cursor-pointer flex items-center gap-[25px] px-[40px] py-6 text-lg max-[450px]:hidden">
          <li
            className={`${
              seleceted === 'contact' && 'border-b-2'
            } hover:border-b-2 border-blue-70`}
            onClick={() => handleScroll('contact')}>
            Contact
          </li>

          <li
            className={`${
              seleceted === 'stack' && 'border-b-2'
            } hover:border-b-2 border-blue-70`}
            onClick={() => handleScroll('stack')}>
            Stack
          </li>

          <li
            className={`${
              seleceted === 'project' && 'border-b-2'
            } hover:border-b-2 border-blue-70`}
            onClick={() => handleScroll('project')}>
            Project
          </li>

          <li
            className={`${
              seleceted === 'experience' && 'border-b-2'
            } hover:border-b-2 border-blue-70`}
            onClick={() => handleScroll('experience')}>
            Experience
          </li>
        </ul>
      </div>
    </header>
  );
}
