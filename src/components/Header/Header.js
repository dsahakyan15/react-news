import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Bootstrap</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse>
                    <InputGroup>
                        <Form.Control />
                        <Button variant="outline-secondary">
                            Button
                        </Button>
                    </InputGroup>
                    <Button variant="outline-secondary">Login</Button>
                    <Button variant="primary">Registration</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Header