import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DataInputScreen from './src/screens/DataInputScreen/DataInputScreen';
import DefinitionScreen from './src/screens/DefinitionScreen/DefinitionScreen';
import { Platform, UIManager } from 'react-native';

const Stack = createNativeStackNavigator();

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={DataInputScreen} />
        <Stack.Screen
          name="Definition"
          component={DefinitionScreen}
          initialParams={{definition: 'Please input data'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
