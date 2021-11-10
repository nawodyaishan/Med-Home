import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
  } from "../constants/userConstants";
  import axios from "axios";

  const Auth = {userLoggedIn : false}


  export const login = (username, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
  
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "http://localhost:4000/app/login",
        { username, password },
        config
      );
  
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      Auth.userLoggedIn=true;
  
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const logout = () => async (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
  };


  export default Auth;
  