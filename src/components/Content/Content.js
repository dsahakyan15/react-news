import { Container, Card, ListGroup, Row, Col, Button, Table } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa6";


export default function Content() {
    return (
        <Container>
            <div className='text-center  mt-3 w-50 mx-auto'>
                <h1 className='fw-normal'>Pricing</h1>
                <p className='fs-5'>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
            </div>
            <div className='cards df'>
                <Row>
                    <Col>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item className='text-center'>Free</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center'>
                                <Card.Title className='align-items-center'>
                                    <p className='fs-1'>$0</p> <span>/mo</span>
                                </Card.Title>
                                <Card.Text>
                                    <p>10 users included</p>
                                    <p>2 GB of storage</p>
                                    <p>Email support</p>
                                    <p>Help center access</p>
                                </Card.Text>
                                <Button variant="outline-primary" size="lg">
                                    Sign up for free
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item className='text-center'>Pro</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center'>
                                <Card.Title className='align-items-center'>
                                    <p className='fs-1'>$15</p> <span>/mo</span>
                                </Card.Title>
                                <Card.Text>
                                    <p>20 users included</p>
                                    <p>10 GB of storage</p>
                                    <p>Priority email support</p>
                                    <p>Help center access</p>
                                </Card.Text>
                                <Button variant="primary" size="lg">
                                    Get started
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='border-primary'>
                            <ListGroup>
                                <ListGroup.Item className='text-center fw-3 bg-primary text-bg-primary'>Enterprise</ListGroup.Item>
                            </ListGroup>
                            <Card.Body className='text-center'>
                                <Card.Title className='align-items-center'>
                                    <p className='fs-1'>$29</p> <span>/mo</span>
                                </Card.Title>
                                <Card.Text>
                                    <p>30 users included</p>
                                    <p>15 GB of storage</p>
                                    <p>Phone and email support</p>
                                    <p>Help center access</p>
                                </Card.Text>
                                <Button variant="primary" size="lg">
                                    Contact us
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </div>
            <h2 className='fw-normal text-center mt-3'>Compare plans</h2>
            <Table hover className='mt-5'>
                <thead>
                    <tr>
                        <th style={{width: '34%'}}></th>
                        <th style={{width:'22%'}}>Free</th>
                        <th style={{width:'22%'}}>Pro</th>
                        <th style={{width:'22%'}}>Enterprise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='fw-bold' style={{ width: '34%' }}>Public</td>
                        <td style={{ width: '22%' }}>yes</td>
                        <td style={{ width: '22%' }}>yes</td>
                        <td style={{ width: '22%' }}>yes</td>
                    </tr>
                    <tr>
                        <td className='fw-bold' style={{ width: '34%' }}>Private</td>
                        <td style={{ width: '22%' }}></td>
                        <td style={{ width: '22%' }}>yes</td>
                        <td style={{ width: '22%' }}>yes</td>
                    </tr>
                    <tr>
                        <td className='fw-bold' style={{ width: '34%' }}>Permissions</td>
                        <td style={{ width: '22%' }}>yes</td>
                        <td style={{ width: '22%' }}>yes</td>
                        <td style={{ width: '22%' }}>yes</td>
                    </tr>
                    <tr>
                        <td className='fw-bold' style={{ width: '34%' }}>Sharing</td>
                        <td style={{ width: '22%' }}></td>
                        <td style={{ width: '22%' }}>yes</td>
                        <td style={{ width: '22%' }}>yes</td>
                    </tr>
                    <tr>
                        <td className='fw-bold' style={{ width: '34%' }}>Unlimited members</td>
                        <td style={{ width: '22%' }}></td>
                        <td style={{ width: '22%' }}>yes</td>
                        <td style={{ width: '22%' }}>yes</td>
                    </tr>
                    <tr>
                        <td className='fw-bold' style={{ width: '34%' }}>Extra security</td>
                        <td style={{ width: '22%' }}></td>
                        <td style={{ width: '22%' }}></td>
                        <td style={{ width: '22%' }}>yes</td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    )
}