interface ButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-2xl bg-pink-70" type="button" role="button">
      <p className="py-1 px-[10px] text-white-10 text-[14px] text-center font-bold">
        {children}
      </p>
    </button>
  );
}
