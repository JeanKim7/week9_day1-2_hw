export type TaskType = {
  id:number,   
  title:string,
    description:string,
    dueDate: string,
    createdAt: string
    completed: boolean
  }

  export type TaskFormDataType = {
    title: string, 
    description: string,
    dueDate: string,
  }