import React, { Component } from 'react';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet';
import './css/wastemap.css';
import data from "./waste.json";
const positions = data.positions;

class WasteMap extends Component {
    constructor() {
        super()
        this.state = {
            lat: 27.6706,
            lng: 84.4385,
            zoom: 13
        }
    }
    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <Map center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />

                {
                    positions.map(s => (
                        < Marker position={[s.lat, s.lng]}>
                            <Tooltip>Qty: {s.qty}</Tooltip>
                        </Marker>
                    ))
                }
            </Map >

        );
    }
}
export default WasteMap;


