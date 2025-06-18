function prepareFormData(form) {
  return {
    name: form.name.trim(),
    age: Number(form.age),
    children: form.children.map((child) => ({
      name: child.name.trim(),
      age: Number(child.age),
    })),
  };
}

export { prepareFormData };
