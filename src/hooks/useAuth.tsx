import { UserEntity } from '@/entities/UserEntity';
import { create } from 'zustand';

type Store = {
  currentUser: UserEntity | null;
  saveUser: (user: UserEntity) => void;
  removeUser: () => void;
  isAuthenticated: boolean;
};

const useStore = create<Store>()((set) => ({
  currentUser: localStorage.getItem('user')
    ? (JSON.parse(localStorage.getItem('user')!) as UserEntity)
    : null,
  saveUser: (user: UserEntity) => {
    localStorage.setItem('user', JSON.stringify(user));
    set(() => {
      return {
        isAuthenticated: true,
        currentUser: user,
      };
    });
  },
  removeUser: () => {
    localStorage.removeItem('user');
    set(() => {
      return {
        isAuthenticated: false,
        currentUser: null,
      };
    });
  },
  isAuthenticated: !!localStorage.getItem('user'),
}));

export const useAuth = () => {
  const { saveUser, removeUser, isAuthenticated, currentUser } = useStore();

  return {
    saveUser,
    removeUser,
    currentUser,
    isAuthenticated,
  };
};
