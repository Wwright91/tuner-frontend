import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Stack } from "react-bootstrap";

export default function NavBar() {
  let navigate = useNavigate();
  const returnHome = () => {
    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <img
            className="hero"
            onClick={returnHome}
            src="https://www.shutterstock.com/image-vector/vector-logo-music-260nw-397640164.jpg"
            alt="hero"
            width="100px"
            height="50px"
          />
        </Navbar.Brand>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Stack direction="horizontal" gap={2} className="p-2">
          <Nav.Item>
            <Link to="/songs">Songs</Link>
          </Nav.Item>
          <Nav.Item>
            {" "}
            <Link to="/albums">Albums</Link>
            </Nav.Item>
          </Stack>
        </Nav>
        <Stack direction="horizontal" gap={2} className="p-2">
          <Button variant="outline-warning">
            <Link to="/songs/new">New Song</Link>
          </Button>
          <Button variant="outline-info">
            <Link to="/albums/new">New Album</Link>
          </Button>
        </Stack>

        {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Container>
    </Navbar>
  );
}
