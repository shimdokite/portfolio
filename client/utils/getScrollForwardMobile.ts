export const getScrollForwardMobile = (type: string) => {
  if (type === 'contact') return 0;
  if (type === 'stack') return 740;
  if (type === 'project') return 1550;
  if (type === 'experience') return 2365;
};

export default getScrollForwardMobile;
