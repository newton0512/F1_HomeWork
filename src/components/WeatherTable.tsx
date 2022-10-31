import axios from 'axios'
import { useEffect, useState } from 'react';
import * as React from 'react';

import WeatherData from "./WeatherData";
import OnLoadingData from "./OnLoadingData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function WeatherTable({coordCity, typeOfWeather}) {

    function isTomorrow(value) {
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 1);
        return value.dt*1000 <= currentDate.getTime();
    }

    const DataLoading =  OnLoadingData(WeatherData);

    const [appState, setAppState] = useState(
        {
            loading: false,
            data_weathers: null,
            typeW: 1,
        }
    )

    useEffect(() => {
        setAppState({loading: true, data_weathers: null, typeW: typeOfWeather})

        let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?'

        if (typeOfWeather >= 2) {
            apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
        }

        const config = {
            params: {
                lat: coordCity[0],
                lon: coordCity[1],
                lang: 'ru',
                appid: 'abed8a8beba69afb5d8fffb1936ef2f8',
            },
        };

        console.log(apiUrl);

        axios.get(apiUrl, config)
            .then((resp) => {
                let allData;
                if (typeOfWeather === 1) {
                    allData = resp.data;
                }
                else {
                    if (typeOfWeather === 2) {
                        allData = resp.data.list.filter(isTomorrow);
                    } else {
                        allData = resp.data.list;
                    }
                }

                setAppState({
                    loading: false,
                    data_weathers: allData,
                    typeW: typeOfWeather,
                });
            })
            .catch((error) => {
                console.log('ERROR - ', error.response.data);
            });
    }, [setAppState, coordCity, typeOfWeather]);

    return (
        <div className="cities">
            <DataLoading isLoading={appState.loading} data_weathers={appState.data_weathers} typeW={appState.typeW}/>
        </div>
    );

}

export default WeatherTable;