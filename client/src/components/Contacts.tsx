import Link from 'next/link';

import Contact from './Contact';

import { CONTACT_LINK } from '@/constants/contact';

interface ContactsProps {
  component: 'intro' | 'footer';
}

export default function Contacts({ component }: ContactsProps) {
  return (
    <div className="flex gap-[14px] mb-2">
      <div>
        <Contact type="phone" component={component} />
      </div>

      <Link href={CONTACT_LINK.mail} target="_blank" rel="noreferrer noopener">
        <Contact type="mail" component={component} />
      </Link>

      <Link
        href={CONTACT_LINK.github}
        target="_blank"
        rel="noreferrer noopener">
        <Contact type="github" component={component} />
      </Link>

      <Link
        href={CONTACT_LINK.tistory}
        target="_blank"
        rel="noreferrer noopener">
        <Contact type="tistory" component={component} />
      </Link>
    </div>
  );
}
