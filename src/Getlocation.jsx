import React, { Component } from 'react'

class Geolocation extends Component {
    state = {}
    render() {
        return (
            <code>
                latitude: {latitude}<br />
                longitude: {longitude}<br />
                error: {error}
            </code>
        );
    }
}

export default Geolocation;