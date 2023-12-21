'use client';

import { useEffect, useState } from 'react';

import getScrollForwardMobile from '../../utils/getScrollForwardMobile';

interface HeaderNavProps {
  isMenuHover?: boolean;
  isProfileHover?: boolean;
  height: number;
}

export default function HeaderNav({ isMenuHover, height }: HeaderNavProps) {
  const [seleceted, setSeleceted] = useState('');

  const handleScroll = (type: string) => {
    const top = getScrollForwardMobile(type);

    scroll({ top, behavior: 'smooth' });
    setSeleceted(type);
  };

  useEffect(() => {
    if (height < 740) setSeleceted('contact');
    if (height >= 740) setSeleceted('stack');
    if (height >= 1550) setSeleceted('project');
    if (height >= 2365) setSeleceted('experience');
  }, [height]);

  return (
    <div className="absolute">
      {isMenuHover && (
        <div className="relative top-4 w-[75px] right-[25px] h-fit rounded-lg border-2 border-blue-90 bg-white-10 shadow-outer/down">
          <div className="flex flex-col justify-center items-center text-[12px] font-bold">
            <ul className="cursor-pointer">
              <li
                className="w-full flex flex-col justify-center items-center border-b border-black-10-10 border-dashed py-[8px] border-opacity-80"
                onClick={() => handleScroll('contact')}>
                Contact
              </li>

              <li
                className="w-full flex flex-col justify-center items-center border-b border-black-10-10 border-dashed py-[8px] border-opacity-80"
                onClick={() => handleScroll('stack')}>
                Stack
              </li>

              <li
                className="w-full flex flex-col justify-center items-center border-b border-black-10-10 border-dashed py-[8px] border-opacity-80"
                onClick={() => handleScroll('project')}>
                Project
              </li>

              <li
                className="flex justify-center py-[8px]"
                onClick={() => handleScroll('experience')}>
                Experience
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
