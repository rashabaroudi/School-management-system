
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';



function App() {


  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
           <Link to="/">

                <Nav.Link href='#home'>Home</Nav.Link></Link>
              <Link to="students">
              <Nav.Link href='#students'>Students</Nav.Link>
                </Link> 
              <Link to="teachers">
              <Nav.Link href='#teachers'>Teachers</Nav.Link>
                </Link>
              <Link to="courses">
              <Nav.Link href='#courses'>Courses </Nav.Link>
           </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
 <Outlet/>
 
    </>
  )
}

export default App
