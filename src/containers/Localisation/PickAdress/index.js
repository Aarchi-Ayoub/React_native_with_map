import React from 'react';
import {View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// config
import {MAP_KEY} from 'react-native-dotenv';
import styles from './styles';

export default ({label, placeholder, selectAdrees}) => {
  return (
    <View style={styles.adress}>
      <Text style={styles.label}>{label}</Text>
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        onPress={(data, details) => selectAdrees(details?.geometry?.location)}
        fetchDetails={true}
        query={{
          key: MAP_KEY,
          language: 'fr',
          components: 'country:mar',
        }}
        styles={styles.input}
      />
    </View>
  );
};
