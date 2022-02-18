import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import mapboxgl from "mapbox-gl";
function MapView({ searchResults }) {
  const mapDiv = () => <div></div>;
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  // const map = new mapboxgl.Map({
  //   style: "mapbox://styles/mapbox/light-v10",
  //   center: [center.longitude, center.latitude],
  //   zoom: 3,
  // });
  // const geojson = {
  //   type: "FeatureCollection",
  //   features: [
  //     {
  //       type: "Feature",
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-77.032, 38.913],
  //       },
  //       properties: {
  //         title: "Mapbox",
  //         description: "Washington, D.C.",
  //       },
  //     },
  //     {
  //       type: "Feature",
  //       geometry: {
  //         type: "Point",
  //         coordinates: [-122.414, 37.776],
  //       },
  //       properties: {
  //         title: "Mapbox",
  //         description: "San Francisco, California",
  //       },
  //     },
  //   ],
  // };
  // for (const feature of geojson.features) {
  //   // create a HTML element for each feature
  //   const el = document.createElement("div");
  //   el.className = "marker";

  //   // make a marker for each feature and add to the map
  //   new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
  // }
  return (
    // <Map
    //   initialViewState={{
    //     ...viewport,
    //   }}
    //   mapboxAccessToken={process.env.mapbox_key}
    //   style={{ width: "100%" }}
    //   mapStyle="mapbox://styles/yvzfth/ckzshkwjv000k14ngydzgk1ck"
    //   onViewportChange={(nextViewport) => setViewport(nextViewport)}
    // >
    //   {searchResults.map((result) => (
    //     <div key={result.long}>
    //       <Marker
    //         longitude={result.long}
    //         latitude={result.lat}
    //         offsetLeft={-19}
    //         offsetTop={-37}
    //       >
    //         <p>❤❤❤🔍❤❤❤</p>
    //       </Marker>
    //     </div>
    //   ))}
    // </Map>

    <iframe
      style={{ width: "100%", height: "100%", border: "none" }}
      src={`https://api.mapbox.com/styles/v1/yvzfth/ckzshkwjv000k14ngydzgk1ck.html?title=false&access_token=${process.env.mapbox_key}&zoomwheel=true#9/${center.latitude}/${center.longitude}`}
      title="Streets"
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          {/* <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-19}
            offsetTop={-37}
          >
            <p>❤❤❤🔍❤❤❤</p>
          </Marker> */}
        </div>
      ))}
    </iframe>
  );
}
// import React, { Component } from "react";
// import { render } from "react-dom";
// import MapGL, {
//   Marker,
//   Popup,
//   NavigationControl,
//   FullscreenControl,
// } from "react-map-gl";

// import CityPin from "./city-pin";
// import CityInfo from "./city-info";

// import CITIES from "./cities.json";

// const TOKEN = ""; // Set your mapbox token here

// const fullscreenControlStyle = {
//   position: "absolute",
//   top: 0,
//   left: 0,
//   padding: "10px",
// };

// const navStyle = {
//   position: "absolute",
//   top: 36,
//   left: 0,
//   padding: "10px",
// };

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewport: {
//         latitude: 37.785164,
//         longitude: -100,
//         zoom: 3.5,
//         bearing: 0,
//         pitch: 0,
//       },
//       popupInfo: null,
//     };

//     window.test = () => {
//       this.setState({
//         ...this.state,
//         viewport: {
//           ...this.state.viewport,
//           zoom: this.state.viewport.zoom === 5 ? 1 : 5,
//         },
//       });
//     };
//   }

//   _updateViewport = (viewport) => {
//     this.setState({ viewport });
//   };

//   _renderCityMarker = (city, index) => {
//     return (
//       <Marker
//         key={`marker-${index}`}
//         longitude={city.longitude}
//         latitude={city.latitude}
//       >
//         <CityPin size={20} onClick={() => this.setState({ popupInfo: city })} />
//       </Marker>
//     );
//   };

//   _renderPopup() {
//     const { popupInfo } = this.state;

//     return (
//       popupInfo && (
//         <Popup
//           tipSize={5}
//           anchor="top"
//           longitude={popupInfo.longitude}
//           latitude={popupInfo.latitude}
//           closeOnClick={false}
//           onClose={() => this.setState({ popupInfo: null })}
//         >
//           <CityInfo info={popupInfo} />
//         </Popup>
//       )
//     );
//   }

//   render() {
//     const { viewport } = this.state;

//     return (
//       <MapGL
//         {...viewport}
//         width="100vw"
//         height="100vh"
//         mapStyle="mapbox://styles/mapbox/dark-v9"
//         onViewportChange={this._updateViewport}
//         mapboxApiAccessToken={TOKEN}
//       >
//         {CITIES.map(this._renderCityMarker)}

//         {this._renderPopup()}

//         <div className="fullscreen" style={fullscreenControlStyle}>
//           <FullscreenControl />
//         </div>
//         <div className="nav" style={navStyle}>
//           <NavigationControl />
//         </div>
//       </MapGL>
//     );
//   }
// }

export default MapView;
