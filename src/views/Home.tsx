import { useState } from 'react'
import {TaskFormDataType, TaskType} from '../types'
import TaskForm from '../components/TaskForm'
import Container from 'react-bootstrap/Container'
import TaskCard from '../components/TaskCard'

export default function Home(){

    const[tasks, setTasks] = useState<TaskType[]>([])

    const addNewTask = (newTaskData: TaskFormDataType) => {
        const newTask: TaskType = {...newTaskData, createdAt: new Date().toString(), completed:false}
        setTasks([...tasks, newTask])
    }
    
    return (
        <>
        <TaskForm addNewTask={addNewTask}/>
        <Container>
            <h1>Incomplete tasks</h1>
            {tasks.filter((task) => task.completed===false).map(task => <TaskCard key ={task.title} task={task}/>)}
        </Container>
        <Container>
            <h1>Complete tasks</h1>
            {tasks.filter((task) => task.completed===true).map(task => <TaskCard key ={task.title} task={task}/>)}
        </Container>

        </>
    )
    
}