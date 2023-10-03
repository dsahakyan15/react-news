import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import logo from './logo.png'


function Header() {
    return (
        <Navbar bg='dark' variant='dark' expend='lg'>
            <Navbar.Brand href='#'>
                <img src={logo} alt='news' style={{ width: '75px' }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='my-navbar' />
            <Navbar.Collapse id='my-navbar'>
                <Nav>
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav>
                <div className='ml-auto d-flex'>
                    <Form className='d-flex'>
                        <FormControl type='text' placeholder='Search' className='me-2' />
                        <Button variant='outline-succes' className='me-xs-1 me-sm-2 me-md-3 me-lg-5'>Search</Button>
                        <Button variant='primary' className='me-2'>Login</Button>
                        <Button variant='secondary' className='me-2'>Register</Button>
                    </Form>
                </div>

            </Navbar.Collapse>
        </Navbar>
    )
}


export default Header