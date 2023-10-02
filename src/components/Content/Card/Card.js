import {Card} from 'react-bootstrap'


export default function Cardik(props){
    return (
        <Card className='mb-4'>
            <Card.Img variant='top' src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card>
    )
}