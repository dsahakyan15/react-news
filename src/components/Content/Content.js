import { Container, ListGroup, Row, Col, Button, Card, Table } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa6";
import NewsCard from './NewsCard';


export default function Content() {
    const cardsDB = [{
        title: 'Ayb',
        img: '/images/image1.jpg',
        text: 'noting too',
        id: 0
    }, {
        title: 'Ayb',
        img: '/images/image2.webp',
        text: 'noting too',
        id: 1
    }, {
        title: 'Ayb',
        img: '/images/image3.png',
        text: 'noting too',
        id: 2
    }
    ]



    return (
        <Container>
            <div className='text-center  mt-3 w-50 mx-auto'>
                <h1 className='fw-normal'>Pricing</h1>
                <p className='fs-5'>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
            </div>
            <Container>
                <Row>
                    {
                        cardsDB.map((obj) => (
                            <Col lg={3} md={4} sm={6} xs={12}>
                                <NewsCard title={obj.title} img={obj.img} text={obj.text} key={obj.id} />
                            </Col>)
                        )

                    }
                    <Col>
                        <Card className='mb-4'>
                            <Card.Header className='bg-danger p-5' ></Card.Header>
                            <Card.Body className='text-center'>
                                <img className='absolutey-top' style={{width:'100px'}} alt="" src="https://i.pinimg.com/736x/4b/0d/8a/4b0d8a3809bff41e4f010fc5add5effe.jpg"/>
                                <Card.Title>Ndife Samuel</Card.Title>
                                <h2>Product Design</h2>
                                <hr/>
                                <Card.Text>I choose the product design track because i love solving visual problems using UI/UX designs</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <h2 className='fw-normal text-center mt-3'>Compare plans</h2>
            <Table hover className='mt-5'>
                <thead>
                    <tr>
                        <th style={{ width: '34%' }}></th>
                        <th style={{ width: '22%' }}>Free</th>
                        <th style={{ width: '22%' }}>Pro</th>
                        <th style={{ width: '22%' }}>Enterprise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='fw-bold' style={{ width: '34%' }}>Public</td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                    </tr>
                    <tr>
                        <td className='fw-bold' style={{ width: '34%' }}>Private</td>
                        <td style={{ width: '22%' }}></td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                    </tr>
                    <tr>
                        <td className='fw-bold' style={{ width: '34%' }}>Permissions</td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                    </tr>
                    <tr>
                        <td className='fw-bold' style={{ width: '34%' }}>Sharing</td>
                        <td style={{ width: '22%' }}></td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                    </tr>
                    <tr>
                        <td className='fw-bold' style={{ width: '34%' }}>Unlimited members</td>
                        <td style={{ width: '22%' }}></td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                    </tr>
                    <tr>
                        <td className='fw-bold' style={{ width: '34%' }}>Extra security</td>
                        <td style={{ width: '22%' }}></td>
                        <td style={{ width: '22%' }}></td>
                        <td style={{ width: '22%' }}><FaCheck /></td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    )
}