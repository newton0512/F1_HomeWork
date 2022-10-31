import * as React from "react";

function OnLoadingWeatherData(Component) {
    return function LoadingWeatherData({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />

        else return (
            <div>
                <h1>Подождите, данные загружаются!</h1>
            </div>
        )
    }
}

export default OnLoadingWeatherData