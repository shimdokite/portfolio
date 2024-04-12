import { ProjectTemplate } from '.';

export default function Project() {
  return (
    <div className="h-[615px] py-7 max-[810px]:h-[812px]">
      <div className="pt-9 flex flex-col justify-center items-center gap-2 mx-2">
        <div className="w-[800px] pb-6 flex items-center max-[810px]:justify-center">
          <h1 className="text-2xl">P r o j e c t</h1>
        </div>

        <div className="mx-4 flex justify-center items-center">
          <ProjectTemplate />
        </div>
      </div>
    </div>
  );
}
