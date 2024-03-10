import Image from 'next/image';
import Link from 'next/link';

import { Button, Modal } from '.';

import { READ_MORE, SERVICES } from '@/constants/project';

interface ReadMoreModalProps {
  setIsOpen: (isOpen: boolean) => void;
  close: () => void;
  type: 'pre' | 'main';
}

export default function ReadMoreModal({
  setIsOpen,
  type,
  close,
}: ReadMoreModalProps) {
  return (
    <Modal setIsOpen={setIsOpen} type="project">
      <div className="w-full h-full flex flex-col px-7 py-4 overflow-y-scroll">
        <section className="mb-4">
          <div className="flex justify-between">
            <h1 className="text-lg mb-3 text-blue-70 font-bold">
              💎 서비스 소개
            </h1>

            <Button
              className="w-7 h-7 flex justify-center items-center"
              onClick={close}>
              &times;
            </Button>
          </div>

          {SERVICES[type].introduce.map((service, index) => (
            <ul key={index}>
              <li className="mb-2 text-[15px]" key={index}>
                {service}
              </li>
            </ul>
          ))}
        </section>

        <section className="mb-4">
          <h1 className="text-lg mb-3 text-blue-70 font-bold">🛠 개발 내용</h1>

          {READ_MORE[type].develop.map((feature, index) => (
            <ul key={index}>
              <li className="mb-2" key={feature.title}>
                <p className="font-bold mb-1">{feature.title}</p>

                <ul className="list-disc">
                  {feature.content.map((content, index) => (
                    <li
                      className="text-sm pb-[6px] ml-5 break-keep"
                      key={index}>
                      {content}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          ))}
        </section>

        <section className="mb-2">
          <h1 className="text-lg mb-3 text-blue-70 font-bold">
            🚨 문제 해결 경험
          </h1>

          {READ_MORE[type].solution.map((solve, index) => (
            <ul key={index}>
              <li className="mb-2" key={solve.title}>
                <Link
                  href={solve.url}
                  target="_blank"
                  rel="noreferrer noopener">
                  <h2 className="w-fit font-bold mb-2 cursor-pointer hover:bg-yellow-10 transition-all">
                    {solve.title}
                  </h2>
                </Link>

                {solve.image !== undefined && (
                  <div className="flex justify-start items-center">
                    <Image
                      src={solve.image}
                      alt="문제 원인 사진"
                      width={500}
                      height={250}
                      className="h-[250px] mb-3 rounded-md"
                    />
                  </div>
                )}
              </li>
            </ul>
          ))}
        </section>
      </div>
    </Modal>
  );
}
