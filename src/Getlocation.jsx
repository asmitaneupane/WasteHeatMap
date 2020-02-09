import React from "react";
import { geolocated } from "react-geolocated";
import { UsePositionDemo } from './Location';
import Geolocation from 'react-geolocation';
class Getlocation extends React.Component {
    render() {
        return (
            <Geolocation
                render={({
                    position: { coords: { latitude, longitude } = {} } = {},
                    error,
                    getCurrentPosition
                }) =>
                    <div>
                        <button onClick={getCurrentPosition}>Get Position</button>
                        {
                            error &&
                            <div>
                                {error.message}
                            </div>
                        }
                        <pre>
                            latitude: {latitude}
                            longitude: {longitude}
                        </pre>
                    </div >
                }
            />
        )

    }
}

export default Getlocation;