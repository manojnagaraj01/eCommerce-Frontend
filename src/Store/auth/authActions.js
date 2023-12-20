import { registerFailure, registerSuccess, loginFailure, loginSuccess,loginRequest,  registerRequest, logoutFailure, logoutSuccess } from "./authSlice";

import authAPI from  "../../api/authAPI";

export const registerUser = (userData)=> async(dispatch)=>{
    dispatch(registerRequest());
    try{
        const response = await authAPI.register(userData);
        dispatch(registerSuccess(response.data))//assuming the response conatains user data
    }catch(error){
        dispatch(registerFailure(error.message))
    }
}

export const loginUser = (credentials)=> async(dispatch)=>{
    dispatch(loginRequest());
    try {
        const response = await authAPI.login(credentials);
        console.log(response); // Log the response
        const token = response.data.token;
        // authAPI.setAuthToken(token);
        dispatch(loginSuccess(response.data));
        localStorage.setItem("iShop", token);
      } catch (error) {
        console.error(error); // Log the error
        dispatch(loginFailure(error.message));
      }
}

export const logout = (data)=>async(dispatch)=>{
    try{
        const response = await authAPI.logout(data)
        dispatch(logoutSuccess(response.data))
        // localStorage.removeItem(user)
        localStorage.removeItem("iShop");
        localStorage.removeItem("count");
        localStorage.clear()
    }catch(err){
        dispatch(logoutFailure(err.message))
    }
}
