import {useState} from 'react';
import { TaskFormDataType } from '../types';
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


type TaskFormProps = {
    addNewTask:(data: TaskFormDataType) => void
}

export default function TaskForm({ addNewTask}: TaskFormProps) {
    const [newTask, setNewTask] = useState<TaskFormDataType>({title: '', description: '', dueDate: ''});

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setNewTask({...newTask, [event.target.name]: event.target.value})
    }

    const handleFormSubmit = (event: React.FormEvent) =>{
            event.preventDefault();
            addNewTask(newTask)
        }

    return (
    <Card className='my-3'>
        <Card.Body>
            <h3 className = "text-center">Create New Task</h3>
            <Form onSubmit={handleFormSubmit}>
                <Form.Label>Task Title</Form.Label>
                <Form.Control name="title" placeholder='Enter new task title' value = {newTask.title} onChange={handleInputChange}></Form.Control>
                <Form.Label>Task Description</Form.Label>
                <Form.Control name="description" placeholder='Enter new task description' value = {newTask.description} onChange={handleInputChange}></Form.Control>
                <Form.Label>Task Due Date</Form.Label>
                <Form.Control name="dueDate" placeholder='Enter new task dueDate' value = {newTask.dueDate} onChange={handleInputChange}></Form.Control>
                <Button variant='success' type='submit'>Create Post</Button>
            </Form>
        </Card.Body>
    </Card>
    )

}