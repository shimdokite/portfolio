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
        title: '로그인',
        content: ['자체 이메일 로그인을 구현했습니다.'],
      },
      {
        title: '게스트와 회원 분리',
        content: [
          '게스트가 접근 가능한 범위(전체 게시물 보기, 특정 게시물 보기)를 정하여 게스트와 회원의 이용 범위를 분리하였습니다.',
        ],
      },
      {
        title: '질문과 댓글',
        content: [
          '회원이 이용할 수 있는 콘텐츠인 질문과 댓글의 생성, 조회, 수정, 삭제를 구현하였습니다.',
        ],
      },
      {
        title: 'UI & UX',
        content: [
          '개발자 도구를 이용하여 요소의 레이아웃과 스타일을 분석하여 UI를 구성하였습니다.',
        ],
      },
    ],
    solution: [
      {
        title: '문제 발견',
        image: '/assets/image/pre_project_error_1.png',
        content: [
          '텍스트를 입력할 때마다 Redux dev tool에서 액션 로그가 계속 출력되는 걸 발견했습니다.',
          '이는 로깅에 대한 불편함을 야기하고, 해당 상태를 의존하고 있는 컴포넌트에서도 불필요한 리렌더링이 발생할 수 있습니다.',
        ],
      },
      {
        title: '문제 원인',
        content: [
          'onChange를 통해 Redux에 저장된 상태를 직접 변경한 것이 문제였습니다.',
        ],
      },
      {
        title: '문제 해결',
        content: [
          '기존 코드에서 부모 컴포넌트에서 submit이 실행되기 때문에 useState를 만들어 초깃값으로 수정할 질문 내용을 저장하고, 이슈가 발생했던 해당 컴포넌트에 props로 내려줍니다.',
          '이렇게 하면 자식 컴포넌트에서 사용했던 useEffect를 사용하지 않아도 되고, 컴포넌트 구조를 체계화할 수 있으며 Redux에서 상태가 업데이트되던 이슈를 해결할 수 있습니다.',
          '더불어 현재 서비스는 텍스트만을 서버와 주고받지만, 더 큰 용량의 데이터를 주고받게 된다면 컴포넌트 구조를 변경한 방법도 고려해볼 수 있습니다.',
        ],
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
