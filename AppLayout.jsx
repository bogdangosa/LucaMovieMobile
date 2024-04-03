import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import LoggedInStack from './LoggedInStack';
import { useUserContext } from './app/contexts/UserContext';

const Stack = createNativeStackNavigator();

const AppLayout = () => {
    const user = useUserContext();

    return (
        <NavigationContainer>
            {user==undefined? 
            <AuthStack />:
            <LoggedInStack />}
        </NavigationContainer>
    );
};

export default AppLayout;