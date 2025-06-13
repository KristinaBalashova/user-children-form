import { defineStore } from "pinia";

export const useUser = defineStore("user", {
  state: () => ({
    name: "",
    age: null,
    childrenLimit: 5,
    children: [
    ],
  }),

  getters: {
    userName: (state) => state.name,
    userAge: (state) => state.age,
    childrenList: (state) => state.children,
  },

  actions: {

    setUserData({ name, age, children }) {
      this.name = name;
      this.age = age;
      this.children = [...children];
    },
  },
});
