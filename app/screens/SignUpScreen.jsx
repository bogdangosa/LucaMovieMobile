import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Text } from 'react-native';
import { COLORS } from '../../Data/Colors';
import InputField from '../../Components/FormElements/InputField';
import SimpleButton from '../../Components/Buttons/SimpleButton';

const SignUpScreen = () => {
    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [PasswordConfirm, setPasswordConfirm] = useState('');

    const handleSignUp = () => {
        // Implement your signup logic here
        console.log('Signing up...');
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
                <Text style={[styles.title,styles.accent]}>Sign Up</Text>
            </View>
            <InputField label="Email" placeholder="Enter your email adress" value={Email} onChangeText={setEmail}></InputField>
            <InputField label="Password" placeholder="Enter your password" value={Password} onChangeText={setPassword}></InputField>
            <SimpleButton title="Sign Up" onPress={handleSignUp} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.neutral,
        height: '100%',
        flex: 1,
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