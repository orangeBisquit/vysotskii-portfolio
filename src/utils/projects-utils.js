export const sortByComplexity = (projects) => {
  return [...projects].sort((a, b) => {
    return b.complexity - a.complexity;
  });
};
export const sortNewFirst = (projects) => {
  return [...projects].sort((a, b) => {
    if (!a.age) {
      console.log(a);
    }
    return b.age - a.age;
  });
}
export const sortOldFirst = (projects) => {
  return [...projects].sort((a, b) => {
    return a.age - b.age;
  });
}