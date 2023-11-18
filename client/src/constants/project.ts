export const PROJECTS = [
  {
    title: 'Stack Overflow',
    thumbnail: '/assets/image/stackoverlfow.png',
    year: '2023',
    stack: 'JavaScript, React, React-quill, Redux-toolkit, Styled-Components',
    summary:
      '개발자를 위한 질의응답 사이트 Stack Overflow 클론 코딩 프로젝트 입니다.',
    site: 'http://lucky7bucket.s3-website.ap-northeast-2.amazonaws.com',
    github: 'https://github.com/codestates-seb/seb45_pre_007',
  },
  {
    title: 'Grow Story',
    thumbnail: '/assets/image/growstory.png',
    year: '2023',
    stack: 'TypeScript, Next.js, React-query, Zustand, Tailwind CSS',
    summary:
      '자신이 키우는 식물의 일지를 기록하고 자신만의 정원을 가꾸며 다른 사람들과 공유하는 서비스 입니다. ',
    site: 'https://growstory.vercel.app',
    github: 'https://github.com/codestates-seb/seb45_main_011',
  },
] as const;

export const READ_MORE = {
  pre: {
    summary: '프리 프로젝트 소개',
    solution: '문제 해결 경험',
  },
  main: {
    summary: '메인 프로젝트 소개',
    solution: '문제 해결 경험',
  },
} as const;
