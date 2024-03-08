import { EXPERIENCES } from '@/constants/experience';

export default function Experience() {
  return (
    <div className="h-full bg-pink-10 max-[810px]:py-8">
      <div className="pb-10">
        <h1 className="relative top-10 left-36 text-2xl max-[410px]:left-[115px]">
          Experience
        </h1>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center mx-2 max-[810px]:pb-16">
        {EXPERIENCES.map((experience) => (
          <div
            className="pb-16 flex justify-center items-center gap-14 max-[810px]:gap-9 max-[810px]:flex-col"
            key={experience.title}>
            <section className="w-[250px] flex flex-col justify-center items-center mr-7">
              <div className="flex flex-col justify-center items-center">
                <h2 className="whitespace-nowrap">{experience.title}</h2>

                <div className="font-light text-sm text-black-20">
                  <p>{experience.start} -</p>
                  <p>{experience.end}</p>
                </div>
              </div>
            </section>

            <section className="w-[300px] flex flex-col justify-center items-start">
              <div className="max-[810px]:flex flex-col">
                <div className="flex justify-start">
                  <h2 className="max-[810px]:flex justify-center items-center">
                    {experience.subTitle}
                  </h2>
                </div>

                <ul className="flex flex-col justify-start font-normal text-sm list-disc">
                  {experience.features.map((feature) => (
                    <li className="w-full" key={feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
