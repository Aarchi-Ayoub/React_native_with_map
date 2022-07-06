import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

// styles
import styles from './styles';
// config
import {MAP_KEY} from 'react-native-dotenv';
import MapViewDirections from 'react-native-maps-directions';
export default () => {
  //
  const mapRef = useRef();
  // local states
  const [initialRegion, setInitialRegion] = useState({
    latitude: 34.06446226508741,
    longitude: -6.766739894829115,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [destination, setDestination] = useState({
    latitude: 34.04462741332137,
    longitude: -6.805901019164147,
  });

  const [depart, setDepart] = useState({
    latitude: 34.075763534330086,
    longitude: -6.771591746405573,
  });

  return (
    <View style={styles.containers}>
      <MapView
        style={styles.containers}
        ref={mapRef}
        initialRegion={initialRegion}
        userInterfaceStyle={'dark'}
        showsUserLocation={true}
        userLocationPriority={'balanced'}>
        <Marker coordinate={destination} />
        <Marker coordinate={depart} />
        <MapViewDirections
          apikey={MAP_KEY}
          origin={depart}
          destination={destination}
          strokeColor="red"
          strokeWidth={5}
          optimizeWaypoints={true}
          mode={'DRIVING'}
          onReady={result => {
            mapRef.current.fitToCoordinates(result.coordinates, {
              edegPadding: {
                top: 100,
                right: 30,
                left: 30,
                bottom: 300,
              },
            });
          }}
        />
      </MapView>
    </View>
  );
};
