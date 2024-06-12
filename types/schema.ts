export type todoType = {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  updatedAt?: Date | null;
  createdAt?: Date;
};
export type projectType = {
  id: string;
  title?: string;
  todos: todoType[];
};
