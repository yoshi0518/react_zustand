import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const userStore = create<{
  users: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      zio: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }[];
  getUsers: () => Promise<void>;
}>()(
  devtools(
    persist(
      (set) => ({
        users: [],
        getUsers: async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          set({ users: await response.json() });
        },
      }),
      {
        name: 'user-store',
      },
    ),
  ),
);

export default userStore;
