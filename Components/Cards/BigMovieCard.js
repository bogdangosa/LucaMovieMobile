import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const BigMovieCard = ({ image, title, description, year, director }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.year}>{year}</Text>
                </View>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.director}>directed by {director}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    image: {
        width: 200,
        height: 300,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        color: 'white',
    },
    description: {
        fontSize: 16,
        marginTop: 5,
        color: 'white',
    },
    year: {
        fontSize: 14,
        marginTop: 5,
        color: 'white',
    },
    director: {
        fontSize: 14,
        marginTop: 5,
        color: 'white',
    },
});

export default BigMovieCard;