'use client';

import { useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
  type: 'project' | 'clipboard';
}

export default function Modal({ children, setIsOpen, type }: ModalProps) {
  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, []);

  return (
    <>
      <div
        onClick={close}
        className="fixed top-0 left-0 w-screen h-screen bg-black-90/20 z-50 backdrop-blur-sm"></div>

      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl z-50 bg-white-10 ${MODAL_STYLE[type]}`}>
        {children}
      </div>
    </>
  );
}

const MODAL_STYLE = {
  project: 'w-[70%] h-[90%] max-[660px]:w-[90%]',
  clipboard: 'w-[35%] h-[25%] max-[640px]:w-[50%] max-[400px]:w-[90%]',
};
