'use client';

import { useState } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
  borderRadius: '8px',
};

const center = {
  lat: 36.27792750435399,
  lng: -5.29284345202366,
};

const GoogleLocation = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
  });

  const [map, setMap] = useState(null);

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
          {
            saturation: -100, // Remove color from labels
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off', // Hide icons for points of interest
          },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          {
            saturation: -100, // Remove color from roads
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [
          {
            saturation: -50, // Remove color from green areas
          },
        ],
      },
    ],
  };

  const onLoad = (map: any) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <>
      {isLoaded ? (
        <div className="max-w-[1316px] mx-auto px-5 mt-[207px] max-[880px]:px-0 max-[880px]:mt-0">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            options={options}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {map && (
              <MarkerF
                position={center}
                title="Vanguard Property"
              />
            )}
          </GoogleMap>
        </div>
      ) : (
        <p>Loading Map...</p>
      )}
    </>
  );
};

export default GoogleLocation;
