import { getCookie } from 'cookies-next';

export const isAuthenticated = () => {
  const token = getCookie('accessToken');
  return !!token;
};