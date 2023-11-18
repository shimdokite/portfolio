import { createPortal } from 'react-dom';

export default function ModalPortal({
  children,
}: {
  children: React.ReactNode;
}) {
  const modal = document.getElementById('modal') as HTMLDivElement;

  return createPortal(children, modal);
}
