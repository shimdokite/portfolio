import StackIcon from './StackIcon';

export default function Stack() {
  return (
    <div className="h-[582px] bg-blue-10">
      <h1 className="relative top-10 left-36 text-2xl">Stack</h1>

      <div className="mt-14 flex justify-center items-center">
        <div className="bg-white-10 px-8 py-3 flex justify-center gap-44">
          <div>
            <h2 className="mb-2 text-lg">Language</h2>
            <StackIcon type="javascript" />
            <StackIcon type="typescript" />
          </div>

          <div>
            <h2 className="mb-2 text-lg">Library & Framework</h2>
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
            <h2 className="mb-2 text-lg">Other</h2>
            <StackIcon type="github" />
            <StackIcon type="aws" />
            <StackIcon type="vercel" />
          </div>
        </div>
      </div>
    </div>
  );
}
