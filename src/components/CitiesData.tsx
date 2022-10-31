import * as React from "react";
import Table from "react-bootstrap/Table";

function CitiesData({cities, getWeatherFunc, setShowTable}) {

    if (!cities || cities.length === 0) return <p>Нет данных по вашему запросу.</p>

    if (cities.length === 1) {
        getWeatherFunc(cities[0].lat,cities[0].lon);
        setShowTable(false);
        return <p></p>
    }

    const selectOneRow = (lat, lon, displayname) => {
        getWeatherFunc(lat, lon);
        (document.getElementById("adressEdit") as HTMLInputElement).value = displayname;
        setShowTable(false)
    }

    return (
        <div>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>id</th>
                    <th>Место</th>
                    <th>Lat</th>
                    <th>Lon</th>
                </tr>
                </thead>
                <tbody>
                {
                    cities.map((cities) =>
                        <tr key={cities.place_id} onClick={(event) => selectOneRow(cities.lat, cities.lon, cities.display_name)}>
                            <td>{cities.place_id}</td>
                            <td>{cities.display_name}</td>
                            <td>{cities.lat}</td>
                            <td>{cities.lon}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )
}

export default CitiesData