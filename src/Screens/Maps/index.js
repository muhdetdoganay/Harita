import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const Maps = () => {
  const [loc, setLoc] = useState({
    latitude: 40.9876,
    longitude: 29.0379,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  Geolocation.getCurrentPosition(
    info =>
      setLoc({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }),
    error => console.log(error),
    {
      enableHighAccuracy: true,
    },
  );

  return (
    <MapView provider={PROVIDER_GOOGLE} style={{flex: 1}} initialRegion={loc}>
      {loc !== undefined && <Marker coordinate={loc} />}
    </MapView>
  );
};

export default Maps;
