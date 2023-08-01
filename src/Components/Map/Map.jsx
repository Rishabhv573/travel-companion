import React from 'react';

import GoogleMapReact from 'google-map-react';
// Paper is basically a div with a background color
// useMediaQuery is going to help us in making our map more mobile responsive
import{ Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
/* Some of the material-ui components are still being worked on and Rating is one of them so we are 
gonna use it from @material-ui/lab components */
import Rating from '@material-ui/lab/Rating';
// import mapStyles from './mapStyles';

import useStyles from './styles';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
    const classes = useStyles();
    // Here min-width: 600px means that isMobile variable is gonna be set to false if width exceeds 600px
    const isDesktop = useMediaQuery('(min-width: 600px)');

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyCRDOFaTt-ZNucqVkqhRwzlufoTnNhQl9U'}}
                // This is going to be center of out map
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                //    top right bottom left
                margin={[50, 50, 50, 50]}
                // for changing the styles of the map
                options={{disableDefaultUI: true, zoomControl: true}}
                // onChange property for when we change the map coordinates or bounds
                onChange={(e) => {
                    setCoordinates=({lat: e.center.lat, lng: e.center.lng});
                    setBounds=({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                // We'll use it when you click on the restaurant on the map
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color='primary' fontSize='large' />
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img 
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                        alt={place.name}
                                    />
                                    <Rating size='small' value={Number(place.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;