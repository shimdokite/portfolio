import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={twMerge(`rounded-2xl bg-pink-70`, className)}
      type="button"
      role="button">
      <p
        className={`py-1 px-[10px] text-white-10 text-[14px] text-center font-bold`}>
        {children}
      </p>
    </button>
  );
}
