import React from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import store from './store';
import Router from './router';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

export default () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
