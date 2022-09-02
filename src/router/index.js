import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Views
import Home from 'containers/Home';
import Positions from 'containers/Positions';
import Localisation from 'containers/Localisation';

export default () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Positions"
          component={Positions}
        />
        {/* <Stack.Screen
          name="Localisation"
          options={{
            title: 'Choisisez votre adresse',
          }}
          component={Localisation}
        />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
