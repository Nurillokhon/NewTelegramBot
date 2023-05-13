import './App.css';
import NavTop from './compnents/Navbar/NavTop';
import ReplayMessage from './compnents/ReplayMessage/ReplayMessage';
import SideBar from './compnents/SideBar/SideBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      <NavTop />
      <Container fluid>
        <Row>
          <Col sm={3}> <SideBar /></Col>
          <Col sm={9}><ReplayMessage /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
