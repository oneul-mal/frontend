const LOGIN = "auth/LOGIN";
const LOGOUT = "auth/LOGOUT";
const REGISTER = "auth/REGISTER";

export const login = (userInfo) => ({ type: LOGIN, userInfo });
export const logout = () => ({ type: LOGOUT });
export const register = (userInfo) => ({ type: REGISTER, userInfo });

const initialState = {
  userId: "",
  userPassword: "",
};

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
      };
    case LOGOUT:
      return {
        ...state,
      };
    case REGISTER:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default auth;
