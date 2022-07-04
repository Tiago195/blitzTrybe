export default interface ITask {
  id: number,
  title: string,
  branch: string,
  status: string,
  content: string,
  user_id: number
}

export type newTask = Omit<ITask, 'id' | 'status'>