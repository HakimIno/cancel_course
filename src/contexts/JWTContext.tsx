import { createContext, useEffect, useReducer } from "react";
// utils
import axios from "../utils/axios";
import { isValidToken, setSession } from "../utils/jwt";

// ----------------------------------------------------------------------
export enum UserRole {
  "admin" = "admin",
  "user" = "user",
}
interface IUser {
  id: number;
  username: string;
  password: string;
  role: UserRole;
}
interface IAuthState {
  isAuthenticated?: boolean;
  isInitialized?: boolean;
  user: IUser | null;
}
interface IAuthAction {
  type: "INITIALIZE" | "LOGIN" | "LOGOUT" | "REGISTER";
  payload: IAuthState;
}
export interface ILogin {
  username: string;
  password: string;
  afterSubmit?: boolean;
}

export interface IRefreshToken {
  user: IUser;
  access_token: string;
  refresh_token: string;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  isInitialized: true,
  user: null,
};

const handlers = {
  INITIALIZE: (state: IAuthState, action: IAuthAction) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state: IAuthState, action: IAuthAction) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state: IAuthState) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state: IAuthState, action: IAuthAction) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state: IAuthState, action: IAuthAction) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
  ...initialState,
  method: "jwt",
  login: (payload: ILogin) => Promise.resolve(),
  logout: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

const AuthProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");

        if (refreshToken && isValidToken(refreshToken)) {
          setSession(accessToken, refreshToken);
          const response = await axios.get("/api/account/my-account");
          const { user } = response.data;

          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    // initialize();
  }, []);

  const login = async (payload: ILogin) => {
    // const { username, password } = payload;
    // const response = await axios.post("/api/account/login", {
    //     username,
    //     password,
    // });
    // const { accessToken, user } = response.data;

    // setSession(accessToken);

    dispatch({
      type: "LOGIN",
      payload: {
        user: {
          id: 1,
          ...payload,
          role: UserRole.admin,
        },
      },
    });
  };

  const logout = async () => {
    setSession(null, null);
    dispatch({
      type: "LOGOUT",
      payload: {
        user: null,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
