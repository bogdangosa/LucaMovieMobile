import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SimpleButton from "../../Components/Buttons/SimpleButton";

const HomeScreen = () => {

    const handleLogout = async() => {
        updateUser({
            command:"logout",
            data:{}
        })
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to LucaMovieMobile!</Text>
            <Text style={styles.subtitle}>This is the home screen.</Text>
            <SimpleButton title="Log Out" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 18,
        color: 'gray',
    },
});

export default HomeScreen;