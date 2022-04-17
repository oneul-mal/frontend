export const login = async (userInfo) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  };
  return fetch("/login", config).then((res) => res.json());
};
