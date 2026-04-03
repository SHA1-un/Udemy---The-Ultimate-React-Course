export function createNewProject() {
  return {
    id: crypto.randomUUID(),
    isDraft: true,
    title: "New Project",
    description: "",
    dueDate: new Date(),
    tasks: [],
  };
}

export function createTask() {
  return { id: crypto.randomUUID(), title: "" };
}
