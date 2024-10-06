import { UserEntity } from '@/entities/UserEntity';

export const useAuth = () => {
  const isAuthenticated = localStorage.getItem('userLoggedIn') ? true : false;

  const saveUser = (user: UserEntity) => {
    localStorage.setItem('userLoggedIn', JSON.stringify(user));
  };

  const removeUser = () => {
    localStorage.removeItem('userLoggedIn');
  };

  return {
    isAuthenticated,
    saveUser,
    removeUser,
  };
};
