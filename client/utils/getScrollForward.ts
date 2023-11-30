const getScrollForward = (type: string) => {
  if (type === 'contact') return 0;
  if (type === 'stack') return 625;
  if (type === 'project') return 1230;
  if (type === 'experience') return 1850;
};

export default getScrollForward;
