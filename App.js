import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './src/components/HomeScreen';
import { DetailsScreen } from './src/components/DetailsScreen';
import { Logo } from './src/components/Logo';
import { StyleSheet }  from 'react-native';

export default function App() {

  const Stack = createStackNavigator();

  return (

      <View style={styles.appContainer} >

        <NavigationContainer>

            <Logo/>

            <Stack.Navigator>

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen}/ >

            </Stack.Navigator>

      </NavigationContainer>

      </View>


  );

}

const styles = StyleSheet.create({
  appContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {

  },
  navigator: {
    flex: 1
  }
})

