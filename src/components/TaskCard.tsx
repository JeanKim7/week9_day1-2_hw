import Card from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'
import { TaskType } from '../types'
import { useState } from 'react'

type TaskCardProps = {
    task: TaskType
}

export default function TaskCard ({task}: TaskCardProps){

    const [completed, setCompleted] = useState(false)


    const handleClick = () => setCompleted(!completed)

    return (
        <Card text="black">
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Subtitle>Due Date: {task.dueDate}</Card.Subtitle>
                <Card.Text>{task.description}</Card.Text>
                <Button variant = 'success' type='submit' onClick={handleClick}>{completed ? "Mark complete": "Mark incomplete"}</Button>
            </Card.Body>

        </Card>
    )
}