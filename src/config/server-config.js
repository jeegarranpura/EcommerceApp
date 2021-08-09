export const baseUrl = 'http://localhost:8080';
export const tokenSecrectKey = 'c012690c-c97d-4e35-aeed-7bc6eeec4e6b';

// export const headers= { authorization: `Bearer ${localStorage.getItem("token")}` };


export const registerUser = `${baseUrl}/api/v1/register/registerUser`;
export const loginUser =  `${baseUrl}/api/v1/login/loginUser`;

//dashboard
export const getAllUserData = `${baseUrl}/api/v1/dashboard/getAllUserData`;

export default {
  registerUser,
  loginUser,
  getAllUserData,
}

