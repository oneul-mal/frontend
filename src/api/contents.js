export const getContents = async () => {
  return fetch("/contents").then((res) => res.json());
};
