import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Text } from 'react-native';
import { COLORS } from '../../Data/Colors';
import InputField from '../../Components/FormElements/InputField';

const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Implement your signup logic here
        console.log('Signing up...');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <InputField placeholder={"ceva"} value={email} onChangeText={setEmail}></InputField>
            <InputField placeholder={"ceva"} value={password} onChangeText={setPassword}></InputField>
            <Button title="Sign Up" onPress={handleSignUp} />
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
});
export default SignUpScreen;