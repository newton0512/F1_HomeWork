import * as React from "react";

function OnLoadingData(Component) {
    return function LoadingCitiesData({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />

        else return (
            <div>
                <h1>Подождите, данные загружаются!</h1>
            </div>
        )
    }
}

export default OnLoadingData