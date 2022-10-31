import * as React from "react";
import Card from "react-bootstrap/Card";

function WeatherCard(data){
    let current_data = data.data;

    let dateFormat = new Date(current_data.dt*1000)

    let dateStr =("0"+dateFormat.getDate()).slice(-2)+
        "."+("0"+(dateFormat.getMonth()+1)).slice(-2)+
        "."+dateFormat.getFullYear()+
        " "+("0"+dateFormat.getHours()).slice(-2)+
        ":"+("0"+dateFormat.getMinutes()).slice(-2)+
        ":"+("0"+dateFormat.getSeconds()).slice(-2);

    return (
        <Card
            bg="Light"
            key={current_data.dt}
            text="dark"
            className="mb-2"
        >
            <Card.Header>Погода на<br/><b>{dateStr}</b></Card.Header>
            <Card.Body>
                <Card.Text>
                    <p><b>Температура</b> - {(current_data.main.temp - 273.15).toFixed(2)} &deg;C</p>
                    <p><b>Ощущается как</b> - {(current_data.main.feels_like - 273.15).toFixed(2)} &deg;C</p>
                    <p><b>Давление</b> - {current_data.main.pressure} мм.рт.столба</p>
                    <p><b>Влажность</b> - {current_data.main.humidity}%</p>
                    <p><b>Скорость ветра</b> - {current_data.wind.speed} м/с</p>
                    <p><b>Облачность</b> - {current_data.weather[0].description}, {current_data.clouds.all}%</p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default WeatherCard