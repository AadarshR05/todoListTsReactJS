export type TaskPropType = {
  tasks: { id: number; title: string; status: "complete" | "incomplete" };
};
export type TaskComponentType = {
  tasks: TaskPropType["tasks"];
  changeStatus: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
