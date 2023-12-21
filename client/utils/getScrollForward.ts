const getScrollForward = (type: string) => {
  if (type === 'contact') return 0;
  if (type === 'stack') return 620;
  if (type === 'project') return 1230;
  if (type === 'experience') return 1840;
};

export default getScrollForward;
