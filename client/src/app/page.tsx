import { Intro, Stack, Project, Experience } from '../components';

export default function Home() {
  return (
    <div className="font-bold text-blue-90">
      <Intro />
      <Stack />
      <Project />
      <Experience />
    </div>
  );
}
