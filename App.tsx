import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Maps from './src/Screens/Maps';
import ConnectedAdres from './src/Screens/Adres';
import store from './src/Redux/Store';
import AdresEkle from './src/Screens/AdresEkle';
function App() {
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Maps" component={Maps} />
          <Tab.Screen name="Adres" component={ConnectedAdres} />
        <Tab.Screen name="Adres Kayıt" component={AdresEkle}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;