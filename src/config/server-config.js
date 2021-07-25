export const baseUrl = '';
export const tokenSecrectKey = 'd012690c-c97d-4e35-aeed-7bc6eeec4e6a';

export const configToken = {
  headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
};
