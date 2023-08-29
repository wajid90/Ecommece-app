import axios from "axios";
import { server } from "../../utils/api";


const login = async ({email,password}) => {
    const responce = await axios.post(`https://ecommerce-server-i9xu.onrender.com/api/v1/user/login`, {
      email,
      password
    },{
      headers:{
        'Content-Type':'application/json',
      },
    });
    if (responce.data) {
      return responce.data;
    }
  };

  const loadUserData = async () => {
    const responce = await axios.get(`${server}/user/me`,{
      withCredentials:true
    });
    if (responce.data) {
      return responce.data;
    }
  };

  const register = async (userData) => {
    const reponces = await axios.post(`${server}/user/new`, userData,{
      headers:{
        "Content-Type": "multipart/form-data",
      },
      withCredentials:true
    });
    if (reponces.data) {
      return reponces.data;
    }
  };

  const logout = async () => {
    const reponces = await axios.get(`${server}/user/logout`,{
      withCredentials:true
    });
    if (reponces.data) {
      return reponces.data;
    }
  };


  const authService = {
    login,
    register,
    loadUserData,
    logout
  };
  export default authService;