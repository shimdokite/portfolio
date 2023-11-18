import { Modal } from '.';

import { READ_MORE } from '@/constants/project';

interface ReadMoreModalProps {
  setIsOpen: (isOpen: boolean) => void;
  type: 'pre' | 'main';
}

export default function ReadMoreModal({ setIsOpen, type }: ReadMoreModalProps) {
  console.log(type);

  return (
    <Modal setIsOpen={setIsOpen}>
      <div className="w-full h-full flex justify-center items-center">
        <div>{READ_MORE[type].summary}</div>
      </div>
    </Modal>
  );
}
