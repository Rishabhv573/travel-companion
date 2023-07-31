import React, { useState, useEffect } from "react";

import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Map from "./Components/Map/Map";
// CssBaseline simply normalizes the style so it fixes padding, margins, background-colors etc.
import { CssBaseline, Grid } from "@material-ui/core";
import { getPlacesData } from './api';

const App = () => {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    // top-right and bottom-left of the getPlacesData are used as bounds
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        /* So to get the user's lat, lng as soon as the app is launched we are gonna use useEffect and for the 
        coordinates of the user we can use built-in browser geolocation api */
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude} }) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    }, []);

    useEffect(() => {

        getPlacesData(bounds.sw, bounds.ne) // as our getPlacesData is an async function so we have to call .then on it
            .then((data) => {
                setPlaces(data);
            })
        // at the end of the function we have dependency array []
        /* and if you leave this dependency array empty that means that the code inside 
         the function block only happen at the start of the application */
    }, [coordinates, bounds]); // by passing in the variables the coordinates gonna change as we move on the map

    return (
        <>
            <CssBaseline />
            <Header />
            {/* Since We are doing inline styles it has to be an object so we have to use double curly braces */}
            <Grid container spacing={3} style={{width: '100%'}}>
                {/* xs = {12} means that this grid is gonna take full width in mobile devices but for medium and 
                larger devices it's only gonna take 4 spaces */}
                <Grid item xs={12} md={4}>
                    <List 
                        places={places}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        // We have to pass our setter function to Map as props
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                        places={places}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;