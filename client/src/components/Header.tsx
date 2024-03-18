'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { HeaderNav } from '.';

import getScrollForward from '../../utils/getScrollForward';

export default function Header() {
  const [isMenuHover, setIsMenuHover] = useState(false);
  const [seleceted, setSeleceted] = useState('');
  const [scrollY, setScrollY] = useState(0);

  const height = typeof window !== 'undefined' ? window.scrollY : 0;

  const handleScroll = (type: string) => {
    const top = getScrollForward(type);

    scroll({ top, behavior: 'smooth' });
  };

  const onScroll = () => {
    setScrollY(window.scrollY);

    console.log(window.scrollY);

    if (height < 616) setSeleceted('contact');
    if (height >= 616) setSeleceted('stack');
    if (height >= 1219) setSeleceted('project');
    if (height >= 1834) setSeleceted('experience');

    if (window.innerHeight === 934 && height >= 1650)
      setSeleceted('experience');
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [height]);

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
              onClick={() => setIsMenuHover(!isMenuHover)}
            />

            {isMenuHover && (
              <HeaderNav isMenuHover={isMenuHover} height={scrollY} />
            )}
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
