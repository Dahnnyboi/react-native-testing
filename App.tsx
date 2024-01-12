import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AppTheme from '@app/AppTheme';
import AppNavigation from '@app/AppNavigation';

import Login from '@screens/login';
import Signup from '@screens/signup';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <AppTheme>
      <AppNavigation>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </AppNavigation>
    </AppTheme>
  );
};

export default App;
