import { ProjectTemplate } from '.';

export default function Project() {
  return (
    <div className="h-[615px] max-[810px]:h-[812px]">
      <h1 className="relative top-10 left-36 text-2xl">Project</h1>

      <div className="mt-20 mx-4 flex justify-center items-center">
        <ProjectTemplate />
      </div>
    </div>
  );
}
