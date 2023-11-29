'use client';

import Image from 'next/image';
import { createPortal } from 'react-dom';

import useModal from '@/hooks/useModal';

import { ClipboardModal } from '.';

import { CONTACT_ICONS, CONTACT_INFO } from '@/constants/contact';

interface ContactProps {
  type: 'phone' | 'github' | 'mail' | 'tistory';
  component: 'intro' | 'footer';
}

export default function Contact({ type, component }: ContactProps) {
  const { isOpen, portalElement, open, close, setType, setIsOpen} = useModal();

  const tooltip = type === 'phone' || type === 'mail';

  const onClipBoard = (type: string) => {
    const phoneNumber = CONTACT_INFO.phone;

    if (type === 'phone') {
      navigator.clipboard.writeText(phoneNumber || '');
      return setType('phone');
    }
  };

  return (
    <div className="relative group">
      <button
        type="button"
        className={`${
          component === 'intro'
            ? 'border-pink-70 bg-pink-70'
            : 'border-blue-70 bg-blue-70'
        } cursor-pointer w-10 h-10 rounded-full flex justify-center items-center`}
        onClick={() => {
          onClipBoard(type), open();
        }}>
        <Image
          src={CONTACT_ICONS[type]}
          alt={`${type} icon`}
          width={type === 'tistory' ? 20 : 25}
          height={type === 'tistory' ? 20 : 25}
        />
      </button>

      {isOpen && portalElement
        ? createPortal(<ClipboardModal setIsOpen={setIsOpen} close={close}/>, portalElement)
        : null}

      <div
        className={`${
          tooltip &&
          'hidden rounded-md bg-black-10 group-hover:flex justify-center items-center z-[20] absolute top-[-90%] left-[50%] translate-x-[-50%]'
        }`}>
        <p
          className="px-[7px] py-1 flex justify-center items-center w-full whitespace-nowrap text-sm text-center font-normal"
          role="tooltip">
          {CONTACT_INFO[type]}
        </p>
      </div>
    </div>
  );
}
