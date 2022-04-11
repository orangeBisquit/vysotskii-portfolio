export const sortByComplexity = (projects) => {
  return [...projects].sort((a, b) => {
    return b.complexity - a.complexity;
  });
};
