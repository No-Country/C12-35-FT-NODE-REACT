import Cookies from "js-cookie"
import axios from "axios"
import { redirect } from "react-router-dom"
import { createAsyncThunk} from '@reduxjs/toolkit';

import { User } from "@@/config/endpoints"

const { login, register } = User


const setCookiesAndRedirect = createAsyncThunk("set/cookies",(accessTokenValue = "test1234") => {
    Cookies.set("accessToken", accessTokenValue, { expires: 1, path: "/" });
    window.location.reload(); // eliminar reload al obtener tokens del back
    return redirect("/app");
})

export const registerUser = createAsyncThunk("post/register", async (values, {dispatch}) => {
    try {
      const response = await axios.post(register, values);

      const data = await response.data;

      dispatch(setCookiesAndRedirect());
      return data;
    } catch (error) {
      dispatch(setCookiesAndRedirect());
      return error;
    }
});

export const loginUser = createAsyncThunk("post/login" , async (values, {dispatch}) => {
    try {
      const response = await axios.post(login, values);

      const data = await response.data;

      dispatch(setCookiesAndRedirect());
      return data;
    } catch (error) {
      dispatch(setCookiesAndRedirect());
      return error;
    } 
});