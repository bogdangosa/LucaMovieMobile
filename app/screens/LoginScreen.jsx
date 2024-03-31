import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Text } from 'react-native';
import InputField from '../../Components/FormElements/InputField';
import SimpleButton from '../../Components/Buttons/SimpleButton';
import { COLORS } from '../../Data/Colors';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        try {
            const response = await axios.post(process.env.SERVER_ADDRESS+'/api/login', {
                email: email,
                password: password
            });
            console.log("Login successful:", response.data);
        } catch (error) {
            console.error("Error occurred during login:", error);
        }
        console.log("response");
    };

    return (
        <View style={styles.login_container}>
            <View style={styles.top_bar_container}>
                <Text style={[styles.title, styles.accent]}>Login</Text>
                <Text style={styles.title} onPress={()=>navigation.navigate("SignUp")}>Sign Up</Text>
            </View>
            <InputField label="Email" placeholder="Enter your email adress" value={email} onChangeText={setEmail}></InputField>
            <InputField label="Password" placeholder="Enter your password" value={password} onChangeText={setPassword}></InputField>
            <SimpleButton title="Sign Up" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    top_bar_container: {
        flexDirection: 'row',
        gap: 16,
    },
    login_container: {
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

export default LoginScreen;