import Card from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'
import { TaskType } from '../types'

type TaskCardProps = {
    task: TaskType,
    addCompleteTask:(task: TaskType) => void
    addIncompleteTask:(task:TaskType)=> void
}

export default function TaskCard ({task, addCompleteTask, addIncompleteTask}: TaskCardProps){

    return (
        <Card text="black">
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Subtitle>Due Date: {task.dueDate}</Card.Subtitle>
                <Card.Text>{task.description}</Card.Text>
                <Button variant = 'success' type='submit' onClick={() =>{task.completed ? addIncompleteTask(task): addCompleteTask(task) ;task.completed = !task.completed}}>{task.completed ? "Mark incomplete": "Mark complete"}</Button>
            </Card.Body>

        </Card>
    )
}