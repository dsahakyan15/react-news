import Header from '../Header'
import Content from '../Content'
import {Container} from 'react-bootstrap'

function App() {
    return (
        <div>
            <Header/>
            <Content/>
            <footer fluid className='bg-dark text-white text-center p-3'>
                <Container>
                    &copy; 2023 News portal.All Rights Reserved 
                </Container>
            </footer>
        </div>)
}


export default App