import * as React from "react";

import Container from 'react-bootstrap/Container';

import "../styles/Main.css";

import InputAdressForm from "./InputAdressForm";
import {useState} from "react";
import WeatherForm from "./WeatherForm";

function Main() {
    const [coordCity, setCoordCity] = useState([false,false]);

    const changeCoordCity = (lat, lon) => {
        setCoordCity([lat, lon]);
        console.log('Смена координат:', lat, lon);
    };

    return (
        <main>
            <Container fluid="sm">
                <Container>
                    <h3> ВЫ МОЖЕТЕ УЗНАТЬ ПОГОДУ В ЛЮБОЙ ТОЧКЕ МИРА! </h3>
                </Container>
                <Container>
                    <InputAdressForm changeCoordCity={changeCoordCity} />
                </Container>
                {(coordCity[0] && coordCity[1]) ? <WeatherForm coordCity={coordCity} /> : null}
            </Container>
        </main>
    );
}

export default Main;