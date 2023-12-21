import { EXPERIENCES } from '@/constants/experience';

export default function Experience() {
  return (
    <div className="h-[600px] bg-pink-10 max-[810px]:h-[630px]">
      <h1 className="relative top-10 left-36 text-2xl max-[410px]:left-[115px]">
        Experience
      </h1>

      <div className="w-full h-[85%] flex flex-col justify-center items-center mx-2 max-[810px]:mt-0">
        {EXPERIENCES.map((experience) => (
          <div
            className="w-[500px] mt-14 flex justify-center items-center gap-14 max-[810px]:gap-9 max-[810px]:flex-col max-[810px]:mt-16"
            key={experience.title}>
            <section className="flex flex-col justify-center items-center mr-7">
              <div className="flex flex-col justify-center items-center">
                <h2 className="whitespace-nowrap">{experience.title}</h2>

                <div className="font-thin text-sm">
                  <p>{experience.start} -</p>
                  <p>{experience.end}</p>
                </div>
              </div>
            </section>

            <section className="flex flex-col justify-center items-center">
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
