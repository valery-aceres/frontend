import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker';
// import Footer from '../Footer';

const Location = (props) => {
    const [center, setCenter] = useState({lat: 25.077544068375236, lng: 55.14700660459156 });
    const [zoom, setZoom] = useState(11);
    return (
      <div>
        <h1 className="p-3 text-center" style={{ margin: 'auto'}}>Our Office location <i style={{color:"limegreen"}} class="fas fa-map-marked-alt"></i></h1>
        <div className="m-auto"style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCZmYES9WZqfl-TRos47XmxZN4ayhcK7nM' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={25.077544068375236}
            lng={55.14700660459156}
            name="My Marker"
            color="red"
          />
        </GoogleMapReact>
        </div>
        
          <div>
          {/* <Footer /> */}
          </div>
      </div>
    );
}




export default Location;