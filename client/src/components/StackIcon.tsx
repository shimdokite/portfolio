'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

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
    | 'scss'
    | 'github'
    | 'vercel'
    | 'aws';
}

export default function StackIcon({ type }: StackIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex gap-1 items-center mb-3">
      <Image
        src={STACK_ICON[type].image}
        alt="stack icon"
        width={24}
        height={24}
      />
      <p className="font-normal text-[15px]">{STACK_ICON[type].title}</p>
    </motion.div>
  );
}
