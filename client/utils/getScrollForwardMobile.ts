const getScrollForwardMobile = (type: string) => {
  if (type === 'contact') return 0;
  if (type === 'stack') return 750;
  if (type === 'project') return 1550;
  if (type === 'experience') return 2360;
};

export default getScrollForwardMobile;
