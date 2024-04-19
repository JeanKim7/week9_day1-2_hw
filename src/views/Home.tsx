import { useState } from 'react'
import {TaskFormDataType, TaskType} from '../types'
import TaskForm from '../components/TaskForm'
import Container from 'react-bootstrap/Container'
import TaskCard from '../components/TaskCard'

export default function Home(){

    const[incompleteTasks, setIncompleteTasks] = useState<TaskType[]>([])
    const[completeTasks, setCompleteTasks] = useState<TaskType[]>([])

    const addNewTask = (newTaskData: TaskFormDataType) => {
        const newTask: TaskType = {...newTaskData, id:incompleteTasks.length+completeTasks.length+1, createdAt: new Date().toString(), completed:false}
        setIncompleteTasks([...incompleteTasks, newTask])
    }

    const addCompleteTask = (newCompleteTask: TaskType) => {
        let indexOld = incompleteTasks.indexOf(newCompleteTask)
        incompleteTasks.splice(indexOld, 1)
        setCompleteTasks([...completeTasks, newCompleteTask])
    }

    const addIncompleteTask = (newIncompleteTask: TaskType) => {
        let indexOld = completeTasks.indexOf(newIncompleteTask)
        completeTasks.splice(indexOld, 1)
        setIncompleteTasks([...incompleteTasks, newIncompleteTask])
    }
    return (
        <>
        <TaskForm addNewTask={addNewTask}/>
        <Container>
            <h1>Incomplete tasks</h1>
            {incompleteTasks.map(task => <TaskCard key ={task.id} task={task} addCompleteTask={addCompleteTask} addIncompleteTask={addIncompleteTask}/>)}
        </Container>
        <Container>
            <h1>Complete tasks</h1>
            {completeTasks.map(task => <TaskCard key ={task.id} task={task} addCompleteTask={addCompleteTask} addIncompleteTask={addIncompleteTask}/>)}
        </Container>

        </>
    )
    
}
