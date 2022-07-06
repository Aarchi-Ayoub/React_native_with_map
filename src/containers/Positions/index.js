import React, {useRef, useState, useEffect} from 'react';
import {Alert, Image, Linking, TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// styles
import styles from './styles';
// config
import {MAP_KEY} from 'react-native-dotenv';
import MapViewDirections from 'react-native-maps-directions';
export default () => {
  // Map ref
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

  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  // Life cycle
  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const {coords} = pos;
      setPosition({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
      console.log(pos);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  // Get my position
  const myPosition = () => {
    Geolocation.getCurrentPosition(pos => {
      // Extract my location infos
      const {coords} = pos;
      const {latitude, longitude} = coords;
      const DEFAULT_PADDING = {top: 40, right: 40, bottom: 40, left: 40};
      mapRef.current.fitToCoordinates([{latitude, longitude}], {
        edegPadding: DEFAULT_PADDING,
        animated: true,
      });
    }).catch(err => {
      console.log('Get Current Position Error: ', err);
    });
  };

  // Show the two markes in the page center
  const markersFocus = result => {
    mapRef.current.fitToCoordinates(result.coordinates, {
      edegPadding: {
        top: 100,
        right: 30,
        left: 30,
        bottom: 300,
      },
    });
  };

  // Help desk call
  const infoCall = () => {
    try {
      Linking.openURL('tel:911');
    } catch (error) {
      console.log('Can Open URL Error : ', error);
      Alert.alert(error);
    }
  };
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
        <Marker coordinate={position} />

        <MapViewDirections
          apikey={MAP_KEY}
          origin={depart}
          destination={destination}
          strokeColor="red"
          strokeWidth={5}
          optimizeWaypoints={true}
          mode={'DRIVING'}
          onReady={result => markersFocus(result)}
        />
      </MapView>
      <View style={styles.btnRow}>
        <TouchableOpacity onPress={infoCall} style={styles.info}>
          <Image
            style={styles.btnImg}
            source={require('assets/infos.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={myPosition} style={styles.myPosition}>
          <Image
            style={styles.btnImg}
            source={require('assets/myLocation.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
