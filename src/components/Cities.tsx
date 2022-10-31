import axios from 'axios'
import { useEffect, useState } from 'react';
import * as React from 'react';

import CitiesData from "./CitiesData";
import OnLoadingData from "./OnLoadingData";

function Cities({city_str, changeCoordCity, setShowTable}) {

    const DataLoading =  OnLoadingData(CitiesData);

    const [appState, setAppState] = useState(
        {
            loading: false,
            cities: null,
        }
    )

    useEffect(() => {
        setAppState({loading: true, cities: null})
        const apiUrl = 'https://nominatim.openstreetmap.org/search?q=' + city_str + '&format=json';
        console.log(apiUrl);
        axios.get(apiUrl).then((resp) => {
            const allCities = resp.data;
            console.log(resp.data);
            setAppState({
                loading: false,
                cities: allCities
            });
        });
    }, [setAppState, city_str]);


    return (
        <div className="cities">
            <DataLoading isLoading={appState.loading} cities={appState.cities} getWeatherFunc={changeCoordCity} setShowTable={setShowTable}/>
        </div>
    );

}

export default Cities;