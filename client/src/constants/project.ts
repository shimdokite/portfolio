export const PROJECTS = [
  {
    title: 'Grow Story',
    thumbnail: '/assets/image/main_project_intro.gif',
    year: '2023',
    stack: 'TypeScript, Next.js, React-query, Zustand, Tailwind CSS',
    summary:
      '자신이 키우는 식물의 일지를 기록하고 자신만의 정원을 가꾸며 다른 사람들과 공유하는 서비스 입니다. ',
    site: 'https://growstory.vercel.app',
    github: 'https://github.com/codestates-seb/seb45_main_011',
  },

  {
    title: 'Stack Overflow',
    thumbnail: '/assets/image/pre_project_intro.gif',
    year: '2023',
    stack: 'JavaScript, React, React-quill, Redux-toolkit, Styled-Components',
    summary:
      '개발자를 위한 질의응답 사이트 Stack Overflow 클론 코딩 프로젝트 입니다.',
    site: 'http://lucky7bucket.s3-website.ap-northeast-2.amazonaws.com',
    github: 'https://github.com/codestates-seb/seb45_pre_007',
  },
];

export const READ_MORE = {
  main: {
    develop: [
      {
        title: '회원가입 & 로그인',
        content: [
          '자체 이메일 회원가입과 로그인, 구글 소셜 로그인을 구현했습니다.',
          'React-hook-form을 사용하여 유효성 검사와 더불어 복잡한 입력 폼을 단순하게 관리했습니다.',
        ],
      },
      {
        title: '유저의 내 게시글 조회',
        content: [
          'React-query와 React-infinite-scroller를 사용하여 페이지 단위로 쿼리를 보내 받아온 데이터를 무한 스크롤로 볼 수 있게 구현했습니다.',
          '데이터를 받아오는 동안 Loading Message를 보여주고, 에러가 난 경우 Error Message를 보이게 했습니다.',
        ],
      },
      {
        title: '게스트 모드와 관리자 페이지',
        content: [
          '게스트 모드를 추가하여 서비스의 진입 장벽을 낮췄습니다.',
          '불량 유저를 관리하고 서비스 문의 목록을 관리하기 위해 관리자 페이지를 구현했습니다.',
        ],
      },
      {
        title: '유저의 서비스 문의 채팅',
        content: [
          'Stomp와 SockJS를 사용하여 유저와 관리자의 양방향 통신의 실시간 채팅을 구현했습니다.',
          '유저는 관리자와 1:1 채팅을 할 수 있고, 관리자는 불특정 다수의 유저와 1:N 채팅을 할 수 있습니다.',
        ],
      },
    ],
    solution: [
      {
        title: '이제야 용기내서 써보는 React Hook Form과 DRY vs WET',
        url: 'https://dokite-99.tistory.com/123',
        image: '/assets/image/react_blog.jpg',
      },
      {
        title: 'React와 Next.js, 그리고 Hydration',
        url: 'https://dokite-99.tistory.com/124',
        image: '/assets/image/main_project_error_1.png',
      },
    ],
  },

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
        title: 'Redux와 애증의 상관관계',
        url: 'https://dokite-99.tistory.com/125',
        image: '/assets/image/pre_project_error_1.webp',
      },
    ],
  },
};

export const SERVICES = {
  main: {
    introduce: [
      'Grow Story는 자신이 키우는 식물을 등록하고 일지를 작성하여 나만의 식물 카드를 만들어 관리할 수 있습니다.',
      '원하는 아이템을 구입하여 자신만의 정원을 꾸며 다양한 유저들에게 소개하고, 소통할 수 있는 커뮤니티 사이트입니다.',
    ],
  },
  pre: {
    introduce: [
      'Stack Overflow는 여러 개발자들과 의견을 나누는 개발자를 위한 질의응답 커뮤니티 사이트입니다.',
    ],
  },
};
