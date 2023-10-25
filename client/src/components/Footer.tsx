import Link from 'next/link';

import Contact from './Contact';

import { CONTACT_LINK } from '@/constants/contact';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col justify-center items-center py-10">
        <div className="flex gap-[14px] mb-2">
          <div>
            <Contact type="phone" />
          </div>

          <Link
            href={CONTACT_LINK.mail}
            target="_blank"
            rel="noreferrer noopener">
            <Contact type="mail" />
          </Link>

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

        <p className="text-blue-90 text-xs font-normal">
          © Developed by Shimdoyeon
        </p>
      </div>
    </footer>
  );
}
