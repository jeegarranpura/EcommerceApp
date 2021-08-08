import axios from 'axios';
import config from '../config/server-config';

export const registerUserReq = async (name, email, password, mobile_no) => {
    try {
      const response = await axios.post(config.registerUser, {
        name: name,
        email: email,
        password : password,
        mobile_no: mobile_no,
      });
      if(response.status === 200){
        
        return response.data;
      }
     
    } catch (e) {
      return false;
      console.log("erroer",e);
    }
  };
  
export const loginUserReq = async (email, password) =>{
  try{
     await axios.post(config.loginUser, {
      email : email,
      password : password
    }).then((res)=>{
      if(res.status === 200){

        window.localStorage.setItem('token',res.data.token);
          window.localStorage.setItem('UserEmail',res.data.data.email);
        console.log("res",res.data);
        return res.data;
      }

    }).catch((e)=>{
      console.log(e);
      alert(e);
       return e; 
    })
    
  }
  catch(e) {
    return false;
  }
}