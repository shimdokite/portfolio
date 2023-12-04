const getScrollForwardMobile = (type: string) => {
  if (type === 'contact') return 0;
  if (type === 'stack') return 750;
  if (type === 'project') return 1560;
  if (type === 'experience') return 2370;
};

export default getScrollForwardMobile;
