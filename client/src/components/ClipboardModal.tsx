import { Button, Modal } from '.';

interface ClipboardModalProps {
  setIsOpen: (isOpen: boolean) => void;
  close: () => void;
}

export default function ClipboardModal({
  setIsOpen,
  close,
}: ClipboardModalProps) {
  return (
    <Modal setIsOpen={setIsOpen} type="clipboard">
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <p className="text-lg">
          <b>클립보드</b>에 복사되었습니다 {':)'}
        </p>

        <Button onClick={() => close()}>닫기</Button>
      </div>
    </Modal>
  );
}
