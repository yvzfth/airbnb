import getCenter from 'geolib/es/getCenter';
import React, { useEffect, useRef, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapView({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
  });

  return (
    <Map
      initialViewState={{
        ...viewport,
        zoom: 12,
      }}
      mapboxAccessToken={process.env.mapbox_key}
      style={{ width: '100%', height: '100%' }}
      mapStyle='mapbox://styles/yvzfth/ckzshkwjv000k14ngydzgk1ck'
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offset={[-20, -10]}
          >
            <p
              role='img'
              aria-label='push-pin'
              onClick={() => setSelectedLocation(result)}
              className='animate-bounce cursor-pointer text-2xl'
            >
              📌
            </p>
          </Marker>
          {/* The popup that should show if we click on the Maker */}
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
}

export default MapView;
