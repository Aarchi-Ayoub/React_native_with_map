import React, {useState, useEffect} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
// Comp
import PickAdress from './PickAdress';
// Actions
import {setStart, setEnd} from 'slices/DestinationSlice';
// Styles
import styles from './styles';

export default () => {
  // States
  const [disabled, setDisabled] = useState(false);
  const [startPosition, setStartPosition] = useState(null);
  const [endPosition, setEndPosition] = useState(null);

  // Hooks
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // Life Cycle
  useEffect(() => {
    if (!startPosition || !endPosition) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [startPosition, endPosition]);

  /** Set positions */
  const startAdress = arg => {
    setStartPosition(arg);
    dispatch(
      setStart({
        latitude: arg?.lat,
        longitude: arg?.lng,
      }),
    );
  };
  const endAdress = arg => {
    setEndPosition(arg);
    dispatch(
      setEnd({
        latitude: arg?.lat,
        longitude: arg?.lng,
      }),
    );
  };
  /** Set positions */

  // Back to maps view
  const confirm = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.content}>
        <PickAdress
          label={'Point départ :'}
          placeholder={'De...'}
          selectAdrees={startAdress}
        />
        <PickAdress
          label={"Point d'arrivé :"}
          placeholder={'Vers...'}
          selectAdrees={endAdress}
        />
        <TouchableOpacity
          disabled={disabled}
          onPress={confirm}
          style={disabled ? [styles.btn, styles.disabled] : styles.btn}>
          <Text style={styles.btnText}>Confirmer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
