import { defineStore } from "pinia";

export const useUser = defineStore("user", {
  state: () => ({
    name: "Василий",
    age: 30,
    childrenLimit: 5,
    children: [
      { name: "Пётр", age: 10 },
      { name: "Василий", age: 14 },
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
