import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

var popup = new maplibregl.Popup({ offset: 25 }).setText(
  'Construction on the Washington Monument began in 1848.'
);

export default function Map() {
  if (process.env.REACT_APP_API_KEY == null) {
    throw new Error("You have to configure env REACT_APP_API_KEY, see README");
  }

  const mapContainerRef = useRef();

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      //   style: `https://api.maptiler.com/maps/streets/style.json?key=${process.env.REACT_APP_API_KEY}`, //normal standard map
      style: `https://api.maptiler.com/maps/openstreetmap/style.json?key=${process.env.REACT_APP_API_KEY}`,
      center: [51.1657, 10.4515],
      zoom: 1
    });

    map.addControl(new maplibregl.NavigationControl(), 'top-right');


    map.on('load', function () {
      map.addSource('maine', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'geometry': {
            'type': 'Polygon',
            'coordinates': [
              [
                [-67.13734351262877, 45.137451890638886],
                [-66.96466, 44.8097],
                [-68.03252, 44.3252],
                [-69.06, 43.98],
                [-70.11617, 43.68405],
                [-70.64573401557249, 43.090083319667144],
                [-70.75102474636725, 43.08003225358635],
                [-70.79761105007827, 43.21973948828747],
                [-70.98176001655037, 43.36789581966826],
                [-70.94416541205806, 43.46633942318431],
                [-71.08482, 45.3052400000002],
                [-70.6600225491012, 45.46022288673396],
                [-70.30495378282376, 45.914794623389355],
                [-70.00014034695016, 46.69317088478567],
                [-69.23708614772835, 47.44777598732787],
                [-68.90478084987546, 47.184794623394396],
                [-68.23430497910454, 47.35462921812177],
                [-67.79035274928509, 47.066248887716995],
                [-67.79141211614706, 45.702585354182816],
                [-67.13734351262877, 45.137451890638886]
              ]
            ]
          }
        }
      });
      map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': 'maine',
        'layout': {},
        'paint': {
          'fill-color': '#088',
          'fill-opacity': 0.8
        }
      });
    });


    new maplibregl.Marker({ color: "#FF0000", draggable: false })
      .setLngLat([8.4037, 49.0069])
      .setPopup(popup)
      .addTo(map);

    return () => {
      map.remove();
    }
  }, []);

  return (
    <div className="map-wrap">
      <div ref={mapContainerRef} className="map" />
    </div>
  );
}