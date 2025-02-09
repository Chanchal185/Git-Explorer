import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { FavoritesProvider } from '../context/FavoritesContext'; 

const Stack = createStackNavigator();

const App = () => {
    return (
        <FavoritesProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'GitHub Explorer' }} />
                    <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Repository Details' }} />
                    <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} options={{ title: 'Favorites' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </FavoritesProvider>
    );
};

export default App;
