import React from "react";
import { Navbar,Container,Nav, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route , Link,Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom"
export function RouterExample(){
return(
<>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        <Link to="/" exact>React-Bootstrap</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"><Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Users">Users</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

{/* Routes---------------- */}
  <Routes>
    <Route path="/about" element={<About />}/>
    <Route path="/" element={<Home />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="*" element={<ErrorPage />}/>
  </Routes>
</>
)
}

// Home Component
function Home(){
  return(
    <><h1>Home Page</h1></>
  )
}
// About component
function About(){
  return(
    <><h1>About Page</h1></>
  )
}
// Contact Component
function Contact(){
  return(
    <><h1>Contact Page</h1></>
  )
}
// Page Not Found 
function ErrorPage(){
  let BackHome = useNavigate()
  return(
    <>
      <h1>Page Not Found</h1><br />
      <Button onClick={()=>{BackHome("/")}}>Back to Home</Button>
    </>
  )
}