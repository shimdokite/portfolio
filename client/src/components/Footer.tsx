import Link from 'next/link';

import Contact from './Contact';

import { CONTACT_LINK } from '@/constants/content';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col justify-center items-center py-10">
        <div className="flex gap-[14px] mb-2">
          <Contact type="phone" />
          <Contact type="mail" />
          <Link
            href={CONTACT_LINK.github}
            target="_blank"
            rel="noreferrer noopener">
            <Contact type="github" />
          </Link>
          <Link
            href={CONTACT_LINK.tistory}
            target="_blank"
            rel="noreferrer noopener">
            <Contact type="tistory" />
          </Link>
        </div>

        <p className="text-blue-90 text-xs">© Developed by Shimdoyeon</p>
      </div>
    </footer>
  );
}
