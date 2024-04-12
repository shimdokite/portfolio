import StackIcon from './StackIcon';

export default function Stack() {
  return (
    <section className="w-full h-[600px] py-7 max-[430px]:h-[812px] bg-blue-10">
      <div className="pt-9 flex flex-col justify-center items-center gap-2 mx-2">
        <div className="w-[783px] pb-3 flex items-center max-[810px]:justify-center">
          <h1 className="text-2xl">S t a c k</h1>
        </div>

        <div className="bg-white-10 rounded-xl shadow-md px-9 py-3 flex justify-center gap-36 max-[670px]:gap-24 max-[510px]:gap-12 max-[430px]:block">
          <div className="max-[670px]:mb-10">
            <h2 className="mb-2 text-lg font-mono">[Language]</h2>
            <StackIcon type="javascript" />
            <StackIcon type="typescript" />
          </div>

          <div className="max-[670px]:mb-10">
            <h2 className="mb-2 text-lg font-mono">[Library & Framework]</h2>
            <StackIcon type="react" />
            <StackIcon type="next" />
            <StackIcon type="zustand" />
            <StackIcon type="redux" />
            <StackIcon type="query" />
            <StackIcon type="tailwind" />
            <StackIcon type="styled" />
            <StackIcon type="scss" />
          </div>

          <div>
            <h2 className="mb-2 text-lg font-mono">[Other]</h2>
            <StackIcon type="github" />
            <StackIcon type="vercel" />
            <StackIcon type="aws" />
          </div>
        </div>
      </div>
    </section>
  );
}
