import Image from 'next/image';

import { STACK_ICON } from '@/constants/stack';

interface StackIconProps {
  type:
    | 'javascript'
    | 'typescript'
    | 'react'
    | 'next'
    | 'zustand'
    | 'redux'
    | 'query'
    | 'tailwind'
    | 'styled'
    | 'sass'
    | 'github'
    | 'aws'
    | 'vercel';
}

export default function StackIcon({ type }: StackIconProps) {
  return (
    <div className="flex gap-1 items-center mb-3">
      <Image
        src={STACK_ICON[type].image}
        alt="stack icon"
        width={24}
        height={24}
      />
      <p className="font-normal text-[15px]">{STACK_ICON[type].title}</p>
    </div>
  );
}
