import React, { useContext, useState } from 'react';
import { Col, Container, Row, Form, Button, ListGroup } from 'react-bootstrap';
import './style.css';
import { TransectionContext } from './appContext';

function HomeComponent() {
    let { transections, addTransection } = useContext(TransectionContext);
    let [newDesc, setDesc] = useState('');
    let [newAmount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        addTransection({
            amount: Number(newAmount),
            desc: newDesc
        })

        setDesc('');
        setAmount('');

    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transections.length; i++) {
            if (transections[i].amount > 0) {
                income = income + transections[i].amount;
            }
        }

        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transections.length; i++) {
            if (transections[i].amount < 0) {
                expense = expense + transections[i].amount;
            }
        }
        return expense;

    }
    console.log(transections);
    return (
        <Container className="rootContainer">
            <Row className="justify-content-md-center mainContainerRow">
                <Col xs lg="4">
                    <h1>Expense Tracker</h1>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs="6" lg={{ span: 6, offset: 4 }}>
                    <h3> Current Balance </h3>
                    <h3><strong>${(getIncome() + getExpense())}</strong></h3>
                </Col>
            </Row>

            <Row className="expenseContainer">
                <Col ><h3>Income</h3> <h3 className="income">${getIncome()}</h3> </Col>
                <Col ><h3>Expenses</h3> <h3 className="expense">${getExpense()}</h3> </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col><h3>History</h3></Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup >
                        {transections.length > 0 ? transections.map((obj, index) => {
                            return (
                                <ListGroup.Item key={index} className={obj.amount > 0 ? 'listGreenBorder' : 'listRedBorder'}>
                                    {obj.desc} <span style={{ float: 'right', fontWeight: '700' }}>
                                        {obj.amount}
                                    </span>
                                </ListGroup.Item>);
                        }) :
                            <ListGroup.Item>
                                <h3>No Record Found</h3>
                            </ListGroup.Item>
                        }


                    </ListGroup>
                </Col>
            </Row>
            <br />
            <br />
            <Row>
                <Col> <h3>Add New Transection</h3></Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={{ span: 1, offset: 2 }}>
                            Details
                                </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="text" placeholder="Details of transection" onChange={(event) => setDesc(event.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm={{ span: 1, offset: 2 }}>
                            Amount
                                </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="number" placeholder="Amount" onChange={(event) => setAmount(event.target.value)} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Col sm={{ span: 6, offset: 3 }}>
                            <Button onClick={(event) => handleSubmit(event)} className="btn btn-block">Add Transection</Button>
                        </Col>
                    </Form.Group>
                </Col>
            </Row>
        </Container>

    );
}


export default HomeComponent;