import React, {useCallback, useMemo, useRef} from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BottomSheetModal, BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
// Styles
import styles from './styles';

const App = () => {
  // nav
  const navigation = useNavigation();

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['15%', '50%'], []);

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

  // List data urls
  const data: string[] = [
    'https://unsplash.it/400/400?image=10',
    'https://unsplash.it/400/400?image=11',
    'https://unsplash.it/400/400?image=12',
    'https://unsplash.it/400/400?image=13',
    'https://unsplash.it/400/400?image=14',
    'https://unsplash.it/400/400?image=15',
    'https://unsplash.it/400/400?image=16',
    'https://unsplash.it/400/400?image=17',
  ];

  // Empty data list
  const renderEmptyComponent = () => {
    if (data) return;
    return (
      <View style={styles.emptyComp}>
        <Text style={styles.emptyText}>No data found</Text>
      </View>
    );
  };

  // Items image render
  const renderItemComponent = ({item, index}) => {
    return (
      <FastImage
        key={index}
        style={styles.imgComp}
        source={{
          uri: item,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    );
  };

  // Separator item
  const renderSeparatorComponent = () => {
    return <View style={styles.separator} />;
  };

  // Go to
  const navigate = () => {
    navigation.navigate('Localisation');
    closePresentModalPress();
  };
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
        <View style={styles.content}>
          <Text style={styles.bigTitle}>Grand titre</Text>
          <Text style={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab magnam
            tempora, repellendus animi consectetur ducimus tempore, impedit
            aspernatur voluptatem earum ut enim dicta nobis aut numquam velit.
            Dolore, accusantium similique?
          </Text>
          <FlatList
            ListEmptyComponent={renderEmptyComponent}
            renderItem={renderItemComponent}
            ItemSeparatorComponent={renderSeparatorComponent}
            horizontal={true}
            data={data}
            extraData={data}
            contentContainerStyle={styles.list}
          />
          <TouchableOpacity
            onPress={navigate}
            style={styles.underButtonContainer}>
            <Text style={styles.underButtonText}>Pick a trip address</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetModal>
    </TouchableOpacity>
  );
};

export default App;
