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
    setUserName(name) {
      this.name = name;
    },
    setUserAge(age) {
      this.age = age;
    },
    addChild(child) {
      if (this.children.length >= this.childrenLimit) {
        throw new Error(`Можно добавить максимум: ${this.childrenLimit} детей`);
      }
      this.children.push(child);
    },
  },
});
