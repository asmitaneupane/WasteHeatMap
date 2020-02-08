import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Map, TileLayer, Marker, Tooltip } from 'react-leaflet';
import './css/wastemap.css';
import { Link } from "react-router-dom";
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
            <div>
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
            <br/>
            <center><div>
                <Button color="secondary" text-color="white">
                <Link to="addwaste" className="text-white">Add Waste</Link></Button>{' '}

                <Button color="secondary" text-color="white">
                <Link to="getlocation" className="text-white">Get Location</Link></Button>{' '}
            </div>
            </center>
            
            </div>
            
           


        );
    }
}
export default WasteMap;


