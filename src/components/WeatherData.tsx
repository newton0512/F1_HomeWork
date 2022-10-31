import * as React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherCard from "./WeatherCard";

function WeatherData({data_weathers, typeW}) {

    if (!data_weathers || data_weathers.length === 0) return <p>Нет данных по вашему запросу.</p>

    if (typeW === 1) {
        return (
            <WeatherCard data={data_weathers} />
        )
    }
    else {
        return (
            <Row xs={1} md={3} xl={4} className="g-4">
                {data_weathers.map((data_weathers) =>
                    <Col>
                        <WeatherCard data={data_weathers} />
                    </Col>
                )}
            </Row>
        )
    }

}

export default WeatherData