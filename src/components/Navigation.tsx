import  Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

export default function Navigation(){

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand >All Done</Navbar.Brand>
            </Container>
        </Navbar>
    )
}