'use client';

import { useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Modal({ children, setIsOpen }: ModalProps) {
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

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl z-50 bg-white-10  w-[50%] h-[50%]">
        {children}
      </div>
    </>
  );
}
