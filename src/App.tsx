import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Container from "react-bootstrap/Container";

export default function App() {
    return(
      <>
      <Navigation />
      <Container>
        <Home />
      </Container>
      </>
    )  

}



