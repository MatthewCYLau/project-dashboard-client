export interface Todo extends AddSkillBody {
  todo_id: number;
  time_created: string;
}

export interface AddSkillBody {
  subject: string;
  body: string;
}

export type TodosList = Todo[];
