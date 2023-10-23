import { EXPERIENCES } from '@/constants/experience';

export default function Experience() {
  return (
    <div className="h-[448px] bg-pink-10">
      <h1 className="relative top-10 left-36 text-2xl">Experience</h1>

      <div className="flex flex-col justify-center items-center">
        {EXPERIENCES.map((experience) => (
          <div className="mt-20 w-[600px] flex gap-16" key={experience.title}>
            <div className="w-[200px]">
              <section className="flex flex-col items-center">
                <h2>{experience.title}</h2>

                <div className="font-thin text-sm">
                  <p>{experience.start} -</p>
                  <p>{experience.end}</p>
                </div>
              </section>
            </div>

            <section className="">
              <h2 className="">{experience.subTitle}</h2>

              <ul className="w-fit flex flex-col justify-start font-normal text-sm list-disc">
                {experience.features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}
