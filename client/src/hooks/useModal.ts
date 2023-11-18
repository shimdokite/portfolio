import { useEffect, useState } from 'react';

const useModal = () => {
  const [type, setType] = useState('pre');
  const [isOpen, setIsOpen] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById('modal'));
  }, [isOpen]);

  const open = () => {
    setIsOpen(true);
  };

  return { type, setType, isOpen, setIsOpen, open, portalElement };
};

export default useModal;
