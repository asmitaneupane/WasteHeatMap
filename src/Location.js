import React from 'react';
import { usePosition } from './usePosition'; 
export const UsePositionDemo = () => {
    const { latitude, longitude, error } = usePosition(); return (
        <code>
            latitude: {latitude}<br />
            longitude: {longitude}<br />
            error: {error}
        </code>
    );
};