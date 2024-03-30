import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Text } from 'react-native';
import { COLORS } from '../../Data/Colors';
import InputField from '../../Components/FormElements/InputField';
import SimpleButton from '../../Components/Buttons/SimpleButton';
import axios from 'axios';

const SignUpScreen = ({navigation}) => {
    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [PasswordConfirm, setPasswordConfirm] = useState('');

    const handleSignUp = () => {
        // Implement your signup logic here
        console.log('Signing up...');
        //const response = axios.post();
    };

    return (
        <View style={styles.signup_container}>
            <View style={styles.top_bar_container}>
                <Text style={styles.title} onPress={()=>navigation.navigate("Login")}>Login</Text>
                <Text style={[styles.title,styles.accent]}>Sign Up</Text>
            </View>
            <InputField label="Username" placeholder="Enter your username" value={Username} onChangeText={setUsername}></InputField>
            <InputField label="Email" placeholder="Enter your email adress" value={Email} onChangeText={setEmail}></InputField>
            <InputField label="Password" placeholder="Enter your password" value={Password} onChangeText={setPassword}></InputField>
            <InputField label="Password" placeholder="Confirm your password" value={PasswordConfirm} onChangeText={setPasswordConfirm}></InputField>
            <SimpleButton title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

const styles = StyleSheet.create({
    top_bar_container: {
        flexDirection: 'row',
        gap: 16,
    },
    signup_container: {
        backgroundColor: COLORS.neutral,
        height: '100%',
        flex: 1,
        gap: 16,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        color: COLORS.primary,
        fontSize: 24,
        marginBottom: 16,
    },
    accent: {
        color: COLORS.accent,
    },
});
export default SignUpScreen;