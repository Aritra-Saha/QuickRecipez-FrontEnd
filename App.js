import React, { Component } from 'react';
import CameraPage from './src/camera.page';
import RecipeTabs from './src/recipe.tabs';
import DetailedRecipes from './src/recipes.detailed';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import LoadingPage from './src/loading.page';

const Stack = createStackNavigator();

// App Class containing functionality for the whole app
export default class App extends Component {
    render() {
        return (
            //Stack for navigating through different screens
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions = {{
                        headerStyle: {backgroundColor: '#faebd7'},
                        headerTintColor: 'black',
                        border: 'black'
                    }}
                >
                    <Stack.Screen 
                        name = "Camera" 
                        component = {CameraPage}
                    />
                    <Stack.Screen
                        name = "Loading"
                        component = {LoadingPage}
                        options = {{
                            headerTitle: ''
                        }}
                    /> 
                    <Stack.Screen 
                        name = "Recipes" 
                        component = {RecipeTabs}
                        options={({ navigation }) => ({
                            headerLeft: () => (
                                <HeaderBackButton
                                label = "Camera"
                                tintColor = 'black'
                                onPress = {() => {
                                    navigation.popToTop();
                                }}
                                />
                            ),
                          })}
                    />
                    <Stack.Screen 
                        name = "Details" 
                        component = {DetailedRecipes}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    };
};
