export interface Task {
  id: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
}
