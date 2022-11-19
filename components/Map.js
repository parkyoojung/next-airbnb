import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import {useState} from 'react'
import getCenter from 'geolib/es/getCenter'
import { object } from 'prop-types'

function Map({searchResults}) {
  const [selectedLocation, setSelectedLocation] = useState({})

  // searchResults object => {latitude: 00.000000, longditude: 00.000000} object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))
  
  // "latitude & longditude" of the center of location coordinates
  const center = getCenter(coordinates)

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })
console.log(selectedLocation)

  return (
      <ReactMapGL
        mapStyle="mapbox://styles/codeyoo/cl9l7jjwt000414o37uhatlf7"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport)=>setViewport(nextViewport)}
      >
        {searchResults.map((result)=> (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
              >
              <p 
                role="img"
                onClick={()=>setSelectedLocation(result)}
                className="cursor-pointer text-2xl animate-bounce"
                aria-label="push-pin"
              >📌</p>
            </Marker>

            {/* Popup */}
            {selectedLocation.long === result.long?(
              <Popup
                onClose={()=>setSelectedLocation({})}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}
              >
                {result.title}
              </Popup>
            ):(
              false
            )}
          </div>
        ))}
      </ReactMapGL>
  )
}

export default Map
