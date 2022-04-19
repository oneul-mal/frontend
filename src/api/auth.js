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

export const register = async (userInfo) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  };

  return fetch("/register", config).then((res) => res.json());
};
