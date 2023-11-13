import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function MyNavbar({ phoneList }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="d-flex justify-content-evenly">
        <Link
          to={"/"}
          className="link-offset-2 link-underline link-underline-opacity-0  px-3 "
        >
          Home
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav  ">
          <Nav className="me-auto">
            {phoneList.map((eachPhone) => {
              return (
                <Link
                  to={`/phone-details/${eachPhone.id}`}
                  key={eachPhone.id}
                  className="link-offset-2 link-underline link-underline-opacity-0 d-flex justify-content-center px-3"
                >
                  {eachPhone.name}
                </Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
