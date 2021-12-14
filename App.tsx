import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DataInputScreen from './src/screens/DataInputScreen/DataInputScreen';
import DefinitionScreen from './src/screens/DefinitionScreen/DefinitionScreen';
import RulingNumberScreen from './src/screens/RulingNumberScreen/RulingNumberScreen';
import LifePeakScreen from './src/screens/LifePeakScreen/LifePeakScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={DataInputScreen}
          options={{title: 'Nhập ngày sinh'}}
        />
        <Stack.Screen
          name="Definition"
          component={DefinitionScreen}
          options={{title: 'Tóm tắt'}}
        />
        <Stack.Screen
          name="RulingNumber"
          component={RulingNumberScreen}
          options={{title: 'Số chủ đạo'}}
        />
        <Stack.Screen
          name="LifePeak"
          component={LifePeakScreen}
          options={{title: '4 đỉnh cao'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
