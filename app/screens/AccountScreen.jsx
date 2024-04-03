import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to LucaMovieMobile!</Text>
            <Text style={styles.subtitle}>This is the account screen.</Text>
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

export default AccountScreen;