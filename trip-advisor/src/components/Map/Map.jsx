import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import React from 'react'

import useStyles from './styles'

const Map = ({setCoordinates,setBounds,coordinates,setChildClicked}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px');

  return (
    <div className={ classes.mapContainer}>
        <GoogleMapReact 
            bootstrapURLKeys={{ key:'AIzaSyCbOpDy4z_QTuC8dmbQc1yG6sZ6b7KyTdE'}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={(e) => {
                            
              setCoordinates({ lat:e.center.lat, lng: e.center.lng});
              setBounds({ ne:e.marginBounds.ne, sw: e.marginBounds.sw});
            }}
            onChildClick={(child) => setChildClicked(child)}
        >
        </GoogleMapReact>

    </div>
  );
}

export default Map