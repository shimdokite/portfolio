export const CONTACT_ICONS = {
  phone: '/assets/icon/phone.svg',
  github: '/assets/icon/github.svg',
  mail: '/assets/icon/mail.svg',
  tistory: '/assets/icon/tistory.svg',
} as const;

export const CONTACT_LINK = {
  github: 'https://github.com/shimdokite',
  tistory: 'https://dokite-99.tistory.com',
  mail: 'mailto:shimdokite@gmail.com',
} as const;

export const CONTACT_INFO = {
  phone: process.env.NEXT_PUBLIC_NUMBER,
  mail: 'shimdokite@gmail.com',
  github: '',
  tistory: '',
};
