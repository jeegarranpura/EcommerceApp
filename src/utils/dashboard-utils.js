import axios from 'axios';
import config from '../config/server-config';

export const GetAllUserData = async () => {
    try {
      const response = await axios.post(config.getAllUserData, {
      },
      {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }
      );
      if(response.status === 200){
        console.log(response.data);
        return response.data;
      }
     
    } catch (e) {
      return false;
      console.log("erroer",e);
    }
  };