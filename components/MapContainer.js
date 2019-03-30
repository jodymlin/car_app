import React from 'react';
import { MapView } from 'expo';

export default class MapContainer extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1, marginBottom: 0 }}
        initialRegion={{
          latitude: 34.0689254,
          longitude: -118.4473698,
          latitudeDelta: 0.0082,
          longitudeDelta: 0.0081,
        }}
      />
    );
  }
}
