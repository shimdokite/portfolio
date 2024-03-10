'use client';

import Image from 'next/image';
import Link from 'next/link';

import { createPortal } from 'react-dom';

import useModal from '@/hooks/useModal';

import { Button, ReadMoreModal } from '.';

import { PROJECTS } from '@/constants/project';

export default function ProjectTemplate() {
  const { type, setType, isOpen, setIsOpen, portalElement, open, close } =
    useModal();

  const onReadMoreType = (title: string) => {
    if (title === 'Stack Overflow') return setType('pre');
    if (title === 'Grow Story') return setType('main');
  };

  return (
    <div className="flex flex-col items-center justify-center gap-11">
      {PROJECTS.map((project) => (
        <div
          key={project.title}
          className="w-full flex flex-col justify-center items-center">
          <div className="w-[800px] flex justify-center items-center font-normal gap-8 max-[810px]:flex-col">
            <Image
              src={project.thumbnail}
              alt="project thumbnail"
              width={200}
              height={130}
              className="w-[200px] h-[130px] rounded-md"
            />

            <section className="w-full flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-2 max-[810px]:justify-center">
                <h2 className="font-bold text-xl max-[810px]:text-lg">
                  {project.title}
                </h2>

                <div className="max-[810px]:text-sm">
                  {'('}
                  <Link
                    href={project.site}
                    className="text-black-10"
                    target="_blank"
                    rel="noreferrer noopener">
                    &nbsp;📎 배포 사이트&nbsp;|&nbsp;
                  </Link>

                  <Link
                    href={project.github}
                    className="text-black-10"
                    target="_blank"
                    rel="noreferrer noopener">
                    깃허브&nbsp;
                  </Link>
                  {')'}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3 max-[810px]:text-sm max-[810px]:justify-center max-[560px]:text-[12px] max-[480px]:text-[10px]">
                <span className="bg-blue-70 text-white-10 px-2 rounded-2xl text-[14px] font-bold">
                  {project.year}
                </span>

                <p>{project.stack}</p>
              </div>

              <div className="max-[810px]:flex flex-col justify-center items-center">
                <p className="mb-2 break-words text-sm max-[810px]:bg-yellow-10 max-[560px]:text-[12px] max-[480px]:text-[9px]">
                  {project.summary}
                </p>

                <div className="max-[810px]:flex justify-center">
                  <Button
                    onClick={() => {
                      open(), onReadMoreType(project.title);
                    }}>
                    자세히 보기
                  </Button>
                </div>
              </div>
            </section>
          </div>

          {isOpen && portalElement
            ? createPortal(
                <ReadMoreModal
                  setIsOpen={setIsOpen}
                  type={type as 'pre' | 'main'}
                  close={close}
                />,
                portalElement,
              )
            : null}

          <hr className="flex items-center justify-center mt-10 border-black-10 w-full max-[810px]:hidden"></hr>
        </div>
      ))}
    </div>
  );
}
