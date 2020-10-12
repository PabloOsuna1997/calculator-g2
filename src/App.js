import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import {Container, Col, Row} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import Card from 'react-bootstrap/Card'

function App() {
    const [operation, setOperation] = useState('')
    const [res, setRes] = useState(0)        //acabo de sacar resultado
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [result, setResult] = useState(0)
    const [display, setDisplay] = useState('')
    const [displaySign, setDisplaySign] = useState('')

    function Result() {
        setRes(1)
        if (displaySign == '+') {
            setDisplay(parseFloat(number1) + parseFloat(number2))
        } else if (displaySign == '-') {
            setDisplay(parseFloat(number1) - parseFloat(number2))
        } else if (displaySign == '*') {
            setDisplay(parseFloat(number1) * parseFloat(number2))
        } else if (displaySign == '/') {
            setDisplay(parseFloat(number1) / parseFloat(number2))
        } else if (displaySign == '' && number1 != '') {
            console.log(number1)
            setDisplay(parseFloat(number1))
        } else {
            console.log("No se pudo realizar la operacion.")
        }
        setDisplaySign('')
        setNumber1('')
        setNumber1(display)
        setNumber2('')
    }


    function Number(num) {
        setOperation(operation + num)
        if (displaySign != '') {
            setNumber2(number2 + num)
            setDisplay(display + num)
        } else {
            setNumber1(number1 + num)
            setDisplay(display + num)
        }
    }

    function valRes() {
        if (displaySign == '' && display != '') {
            setNumber1(display)
        }
        setDisplay('')
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                        src="/1P.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Calculator G2
                </Navbar.Brand>
            </Navbar>
            <Container id="contenedor">
                <Row id="dis">
                    <Col>
                        <Card>
                            <Card.Body><h3 id="operation">{operation}</h3></Card.Body>
                            <Card.Body><h2>{display}</h2></Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => Number('7')}>7</Button>
                        <Button onClick={() => Number('8')}>8</Button>
                        <Button onClick={() => Number('9')}>9</Button>
                        <Button id="signo" variant="secondary" onClick={() => {
                            setOperation(operation + '+')
                            if (number1 != '' && number2 != '') {
                                setNumber1((parseFloat(number1) + parseFloat(number2)) + '')
                                setNumber2('')
                                setDisplay('')
                                setDisplaySign('+')
                            } else {
                                setDisplaySign('+')
                                setDisplay('')
                                valRes()
                            }
                        }}>+</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => Number('4')}>4</Button>
                        <Button onClick={() => Number('5')}>5</Button>
                        <Button onClick={() => Number('6')}>6</Button>
                        <Button id="signo" variant="secondary" onClick={() => {
                            setOperation(operation + '-')
                            if (number1 != '' && number2 != '') {
                                setNumber1((parseFloat(number1) - parseFloat(number2)) + '')
                                setNumber2('')
                                setDisplay('')
                                setDisplaySign('-')
                            } else {
                                setDisplaySign('-')
                                setDisplay('')
                                valRes()
                            }
                        }}>-</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => Number('1')}>1</Button>
                        <Button onClick={() => Number('2')}>2</Button>
                        <Button onClick={() => Number('3')}>3</Button>
                        <Button id="signo" variant="secondary" onClick={() => {
                            setOperation(operation + '*')
                            if (number1 != '' && number2 != '') {
                                setNumber1((parseFloat(number1) * parseFloat(number2)) + '')
                                setNumber2('')
                                setDisplay('')
                                setDisplaySign('*')
                            } else {
                                setDisplaySign('*')
                                setDisplay('')
                                valRes()
                            }
                        }}>*</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="warning" id="cls" onClick={() => {
                            setDisplay('')
                            setNumber1('')
                            setNumber2('')
                            setDisplaySign('')
                            setOperation('')
                        }}>CLS</Button>
                        <Button variant="secondary" onClick={() => Number('.')} id="punto">.</Button>
                        <Button onClick={() => Number('0')}>0</Button>
                        <Button variant="danger" onClick={() => {
                            setDisplay('')
                            Result()
                        }}>=</Button>
                        <Button id="signo" variant="secondary" onClick={() => {
                            setOperation(operation + '/')
                            if (number1 != '' && number2 != '') {
                                setNumber1((parseFloat(number1) / parseFloat(number2)) + '')
                                setNumber2('')
                                setDisplay('')
                                setDisplaySign('/')
                            } else {
                                setDisplaySign('/')
                                setDisplay('')
                                valRes()
                            }
                        }}>/</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
