import React, { useReducer } from "react";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERROR
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    errors: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Log User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("http://localhost:5000/api/auth");

      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (error) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Register User
  const register = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users",
        formData,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.message
      });
    }
  };

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth",
        formData,
        config
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.message
      });
    }
  };
  // Logout
  const logout = () => {
    dispatch({
      type: LOGOUT
    });
  };
  // Clear Errors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERROR });
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        errors: state.errors,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
