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
];

export const READ_MORE = {
  pre: {
    develop: [
      {
        title: '회원가입 & 로그인',
        content: [
          '자체 이메일 회원가입, 로그인을 구현했습니다.',
          'OAuth 2를 사용해 구글 로그인을 구현했습니다.',
        ],
      },
    ],
    solution: [
      {
        title: '문제 발견',
        content: [
          '로그인 후 새로고침을 할 때마다 하이드레이션(hydration) 에러가 뜨는 것을 확인했습니다.',
        ],
        image: '/assets/image/main_project_error_1.png',
      },
    ],
  },

  main: {
    develop: [
      {
        title: '회원가입 & 로그인',
        content: [
          '자체 이메일 회원가입, 로그인을 구현했습니다.',
          'OAuth 2를 사용해 구글 로그인을 구현했습니다.',
        ],
      },
      {
        title: '소셜 회원과 이메일 회원 분리',
        content: [
          '로그인 할때 isGoogleLogin, isEmailLogin 값을 사용하여 사용자 유형을 나누어 정보 수정 페이지를 조건부 스타일로 구현했습니다.',
        ],
      },
      {
        title: '사용자의 내 게시글',
        content: [
          'React-query와 React-infinite-scroller를 사용하여 페이지 단위로 쿼리를 보내 받아온 데이터를 무한 스크롤로 볼 수 있게 구현했습니다.',
          '데이터를 받아오는 동안 Loading Message를 보여주고, 에러가 난 경우 Error Message를 보이게 했습니다.',
        ],
      },
      {
        title: '서버 통신 로직 분리',
        content: [
          '서버 통신 로직을 React-query를 사용하여 Custom Hook으로 만들어 페이지 컴포넌트에서 UI와 서버 통신을 분리했습니다.',
        ],
      },
      {
        title: '반응형 웹',
        content: [
          '데스크톱 뿐만 아니라 모바일 화면에도 대응할 수 있도록 반응형 웹으로 개발하였습니다.',
        ],
      },
    ],
    solution: [
      {
        title: '문제 발견',
        content: [
          '로그인 후 새로고침을 할 때마다 하이드레이션(hydration) 에러가 뜨는 것을 확인했습니다.',
        ],
        image: '/assets/image/main_project_error_1.png',
      },
      {
        title: '문제 원인',
        content: [
          '원인은 서버 측 렌더링과 클라이언트 측 렌더링의 불일치로 인한 렌더링 이슈였습니다.',
        ],
      },
      {
        title: '문제 해결',
        content: [
          '서버 사이드 렌더링(SSR)과 클라이언트 사이드 렌더링(CSR)의 차이점을 알아보고, React Hooks와 함수형 컴포넌트가 존재하기 이전에 componentDidMount()에서 this.state.isClient를 true로 설정하여 해결한 방법을 참고했습니다.',
          'useClient라는 Custom Hook을 만들어 컴포넌트가 처음 렌더링 된 후 useEffect가 실행되면서 state의 값을 변경하고 다시 렌더링을 수행하여 서버와 동일한 콘텐츠를 렌더링 할 수 있도록 구현하여 문제를 해결했습니다.',
        ],
      },
    ],
  },
};
