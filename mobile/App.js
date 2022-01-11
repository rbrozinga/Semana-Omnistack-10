import React from 'react';
import { StatusBar} from 'react-native';

import Routes from './src/routes'

// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7"/>
      
      <Routes/>
      </NavigationContainer>
    </>
  );
}


