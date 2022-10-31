import * as React from "react";
import Container from "react-bootstrap/Container";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import {useState} from "react";
import Row from "react-bootstrap/Row";
import WeatherTable from "./WeatherTable";

function WeatherForm({coordCity}){

    const [typeOfWeather, setTypeOfWheater] = useState(1);

    return (
        <>
            <Container className="d-flex justify-content-center">
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={(value) => setTypeOfWheater(value)}>
                    <ToggleButton id="tbg-radio-1" value={1}>
                        Погода сейчас
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-1" value={2}>
                        Погода на сутки
                    </ToggleButton>
                    <ToggleButton id="tbg-radio-2" value={3}>
                        Погода на пять дней
                    </ToggleButton>
                </ToggleButtonGroup>
            </Container>
            <Row><h3></h3></Row>
            <WeatherTable coordCity={coordCity} typeOfWeather={typeOfWeather} />
        </>
    )
}

export default WeatherForm;