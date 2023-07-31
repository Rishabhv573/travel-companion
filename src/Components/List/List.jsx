import React, { useState } from 'react';
// CircularProgress is material-ui loading bar
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import useStyles from './styles'; 
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places }) => {
    const classes = useStyles();
    // The first thing is your state and second thing is a fucntion that modifies that state
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>
            <Typography variant='h4'>Restaurant, Hotels & Attractions</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                {/* Inside of e.target.value is where the value of the clicked element will be either restaurant, hotel or attraction */}
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value='reataurants'>Restaurants</MenuItem>
                    <MenuItem value='hotels'>Hotels</MenuItem>
                    <MenuItem value='attractions'>Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem> 
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
                {/* places?. means only if you have places then only map over them */}
                {places?.map((place, i) => (
                    // xs={12} means that from any size of devices it is gonna take full width of the list container
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;