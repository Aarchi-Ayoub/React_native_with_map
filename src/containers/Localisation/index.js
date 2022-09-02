import React, {useState, useEffect} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import PickAdress from './PickAdress';
import styles from './styles';

export default () => {
  const [disabled, setDisabled] = useState(false);
  const [startPosition, setStartPosition] = useState(null);
  const [endPosition, setEndPosition] = useState(null);

  useEffect(() => {
    if (!startPosition && !endPosition) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [startPosition, endPosition]);

  const startAdress = arg => {
    console.log('startAdress', arg);
  };
  const endAdress = () => {
    console.log('endAdress');
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
          style={disabled ? [styles.btn, styles.disabled] : styles.btn}>
          <Text style={styles.btnText}>Confirmer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
