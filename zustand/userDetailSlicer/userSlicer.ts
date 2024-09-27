import { StateCreator } from "zustand";

interface UserState {
  id: number;
  name: any;
  price: number;
  quantity: number;
}
export interface User {
  products: Array<UserState>;
  addProduct: (id: number, name: any, price: number, quantity: number) => void;
  updateProduct: (data: any) => void;
}

export const AuthConstructor: StateCreator<User> = (set, get) => ({
  products: [],
  updateProduct: (data: any) =>
    set(() => ({
      products: data,
    })),
  addProduct: (id: number, name: any, price: number, quantity: number) => {
    set((state) => ({
      products: [...state.products, { id, name, price, quantity }],
    }));
  },
});
