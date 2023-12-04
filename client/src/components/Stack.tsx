import StackIcon from './StackIcon';

export default function Stack() {
  return (
    <section className="w-full h-[600px] max-[410px]:h-[812px] bg-blue-10">
      <h1 className="relative top-10 left-36 text-2xl">Stack</h1>

      <div className="mt-20 max-[410px]:mt-14 flex justify-center items-center mx-2">
        <div className="bg-white-10 rounded-sm px-8 py-3 flex justify-center gap-44 max-[670px]:gap-24 max-[510px]:gap-12 max-[410px]:block">
          <div className="max-[670px]:mb-10">
            <h2 className="mb-2 text-lg">[Language]</h2>
            <StackIcon type="javascript" />
            <StackIcon type="typescript" />
          </div>

          <div className="max-[670px]:mb-10">
            <h2 className="mb-2 text-lg">[Library & Framework]</h2>
            <StackIcon type="react" />
            <StackIcon type="next" />
            <StackIcon type="zustand" />
            <StackIcon type="redux" />
            <StackIcon type="query" />
            <StackIcon type="tailwind" />
            <StackIcon type="styled" />
            <StackIcon type="sass" />
          </div>

          <div>
            <h2 className="mb-2 text-lg">[Other]</h2>
            <StackIcon type="github" />
            <StackIcon type="aws" />
            <StackIcon type="vercel" />
          </div>
        </div>
      </div>
    </section>
  );
}
