import React, {useCallback, useMemo, useRef} from 'react';
import {View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BottomSheetModal, BottomSheetBackdrop} from '@gorhom/bottom-sheet';
// Styles
import styles from './styles';

const App = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['15%', '40%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    try {
      bottomSheetModalRef.current?.present();
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }, []);
  const closePresentModalPress = useCallback(() => {
    try {
      bottomSheetModalRef.current?.dismiss();
    } catch (error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // Fond gris sur le reste du view
  const renderBackdrop = useCallback(props => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  // renders
  return (
    <TouchableOpacity
      onPress={handlePresentModalPress}
      style={styles.container}>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            onPress={closePresentModalPress}
            style={styles.closeContainer}>
            <Image
              source={require('assets/close.png')}
              resizeMode="contain"
              style={styles.closeImg}
            />
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    </TouchableOpacity>
  );
};

export default App;
