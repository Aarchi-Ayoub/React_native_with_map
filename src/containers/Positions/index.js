import React, {useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, Image, Linking, TouchableOpacity, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import BottomSheet from './BottomSheet ';
// styles
import styles from './styles';
// config
import {MAP_KEY} from 'react-native-dotenv';
// actions
import {setMyPosition} from 'slices/PositionSlice';
export default () => {
  // Map ref
  const mapRef = useRef();

  // Read from store
  const initialRegion = useSelector(state => state.Position?.coord);
  const position = useSelector(state => state.Position?.cuurentPosition);

  const destination = useSelector(state => state.Destination?.start);
  const depart = useSelector(state => state.Destination?.end);

  // Dispatch store actions
  const dispatch = useDispatch();

  // Life cycle
  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const {coords} = pos;
      dispatch(
        setMyPosition({
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
        }),
      );
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
        region={initialRegion}
        userInterfaceStyle={'dark'}
        showsUserLocation={true}
        userLocationPriority={'balanced'}>
        {destination?.latitude && <Marker coordinate={destination} />}
        {depart?.latitude && <Marker coordinate={depart} />}
        <Marker coordinate={position} />

        {depart?.latitude && (
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
        )}
      </MapView>
      <View style={styles.btnRow}>
        <TouchableOpacity
          onPress={infoCall}
          style={[styles.info, styles.commonBtnStyles]}>
          <Image
            style={styles.btnImg}
            source={require('assets/infos.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={myPosition}
          style={[styles.myPosition, styles.commonBtnStyles]}>
          <Image
            style={styles.btnImg}
            source={require('assets/myLocation.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <BottomSheet />
    </View>
  );
};
