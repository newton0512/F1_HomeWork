import * as React from "react";
import {useState} from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Cities from "./Cities";

import "../styles/InputAdressForm.css";


function InputAdressForm({changeCoordCity}){
    const [message, setMessage] = useState('');

    const [updated, setUpdated] = useState(message);

    const [showTable, setShowTable] = useState(false);


    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        changeCoordCity(false,false);
        setShowTable(true);
        setUpdated(message);
    };

    const getCurrentPosition = () => {
        if (!navigator.geolocation) {
            console.log('Геолокация не поддерживается вашим браузером!');
        } else {
            console.log('Определение местоположения...');
            navigator.geolocation.getCurrentPosition((position) => {
                (document.getElementById("adressEdit") as HTMLInputElement).value = 'Текущее местоположение';
                changeCoordCity(position.coords.latitude, position.coords.longitude);
            }, () => {
                console.log('Ошибка при определении вашего местоположения!');
            });
        }
    }

    return (
        <>
            <Row>
                <Form.Label column sm="2">
                    Узнать погоду в:
                </Form.Label>
                <Col sm="5">
                    <Form.Control type="input" id="adressEdit" placeholder="Введите название города/района..." onChange={handleChange}/>
                </Col>
                <Col sm="1">
                    <Button variant="primary" onClick={handleClick}>
                        Поиск
                    </Button>
                </Col>
                <Col sm="4">
                    <Button variant="primary" onClick={getCurrentPosition}>
                        Текущее местоположение
                    </Button>
                </Col>
            </Row>
            <Row><h3></h3></Row>
            {showTable ? <Cities city_str={updated} changeCoordCity={changeCoordCity} setShowTable={setShowTable}/> : null}
        </>
    )
}

export default InputAdressForm;