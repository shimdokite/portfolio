export default function Header() {
  return (
    <header>
      <div className="w-full h-[76px] bg-white-10 fixed flex justify-end items-center shadow-down z-50">
        <ul className="h-[28px] cursor-pointer flex items-center gap-[25px] px-[40px] py-6 text-lg">
          <li className="hover:border-b-2 border-blue-70">Contact</li>
          <li className="hover:border-b-2 border-blue-70">Stack</li>
          <li className="hover:border-b-2 border-blue-70">Project</li>
          <li className="hover:border-b-2 border-blue-70">Experience</li>
        </ul>
      </div>
    </header>
  );
}
