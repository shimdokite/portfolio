import Image from 'next/image';
import Link from 'next/link';

import { Button } from '.';

import { PROJECTS } from '@/constants/project';

export default function ProjectTemplate() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      {PROJECTS.map((project) => (
        <div
          key={project.title}
          className="w-full flex flex-col justify-center items-center">
          <div className="w-[800px] flex justify-center items-center font-normal gap-8">
            <Image
              src={project.thumbnail}
              alt="project thumbnail"
              width={245}
              height={180}
            />

            <section className="w-full flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-2">
                <h2 className="font-bold text-[24px]">{project.title}</h2>
                <div>
                  {'('}
                  <Link href={project.site} className="text-black-10">
                    &nbsp;📎 배포 사이트&nbsp;|&nbsp;
                  </Link>
                  <Link href={project.github} className="text-black-10">
                    깃허브&nbsp;
                  </Link>
                  {')'}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-70 text-white-10 px-2 rounded-2xl text-[14px] font-bold">
                  {project.year}
                </span>
                <p>{project.stack}</p>
              </div>

              <div>
                <p className="w-[480px] mb-2 break-words">{project.summary}</p>
                <Button>자세히 보기</Button>
              </div>
            </section>
          </div>

          <div className="flex items-center justify-center mt-10 border-black-10 border-[0.5px] w-[65%]"></div>
        </div>
      ))}
    </div>
  );
}
