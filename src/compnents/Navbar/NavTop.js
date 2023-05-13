
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useNavigate } from 'react-router';

function NavTop() {
  const navigate = useNavigate()
  const hendliLogOut = ()=>{
    localStorage.clear()
    navigate('/')
  }
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        <Form className="d-flex px-3">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="warning">Search</Button>
        </Form>


        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='swiim'>

          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll

          >
            <Navbar.Brand href="#" className='center px-10'>Murojaat & Javob</Navbar.Brand>
            <NavDropdown title="Lang" id="navbarScrollingDropdown">
              <NavDropdown.Item href="">Uz</NavDropdown.Item>
              <NavDropdown.Item href="">Eng</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <div className="dropdown sidebar-profile">
          <span className="d-flex align-items-center justify-content-center  link-dark text-decoration-none " id="dropdownUser3"  aria-expanded="false">
            <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4--v1.png" alt="avatar" className="avatar pointer px-1  rounded-circle" />
            <DropdownButton id="dropdown-basic-button" >
              <Dropdown.Item href="">Profil</Dropdown.Item>
              <Dropdown.Item href="">Sozlamalar</Dropdown.Item>
              <Dropdown.Item href="" onClick={hendliLogOut}>Chiqish</Dropdown.Item>
            </DropdownButton>
          </span>

          {/* <ul className="dropdown-menu text-small shadow pointer" aria-labelledby="dropdownUser3">
            <li>
              <a className="dropdown-item pointer" href="/my-account">
                Profil
              </a>
            </li>
            <li>
              <hr className="dropdown-divider pointer" />
            </li>
            <li>
              <button className="dropdown-item pointer" >
                Chiqish
              </button>
            </li>
          </ul> */}

        </div>
      </Container>
    </Navbar>
  );
}

export default NavTop;