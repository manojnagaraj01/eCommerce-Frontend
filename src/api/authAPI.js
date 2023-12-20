import axios from "axios";

const baseURL = "https://ecom-mcpa.onrender.com/api/v1"


const authAPI = axios.create({
    baseURL
})
// Function to set the token in the headers
const setAuthToken = (token) => {
    if (token) {
      authAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete authAPI.defaults.headers.common["Authorization"];
    }
  };
const register = async(userData)=>{
    return await authAPI.post('/auth/register', userData)
};

const login = async(credentials)=>{
    return await authAPI.post('/auth/login', credentials)
}
const logout = async(data)=>{
    return await authAPI.post('/auth/logout', data)
}

export default { register, login,logout ,setAuthToken};
