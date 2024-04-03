import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Text } from 'react-native';
import InputField from '../../Components/FormElements/InputField';
import SimpleButton from '../../Components/Buttons/SimpleButton';
import { COLORS } from '../../Data/Colors';
import axios from 'axios';
import { useUserUpdateContext } from '../contexts/UserContext';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const updateUser = useUserUpdateContext();

    const handleLogin = async() => {
        updateUser({
            command:"login",
            data:{
                email:email,
                password:password,
            }
        })
    };

    return (
        <View style={styles.login_container}>
            <View style={styles.top_bar_container}>
                <Text style={[styles.title, styles.accent]}>Login</Text>
                <Text style={styles.title} onPress={()=>navigation.navigate("SignUp")}>Sign Up</Text>
            </View>
            <InputField label="Email" placeholder="Enter your email adress" value={email} onChangeText={setEmail}></InputField>
            <InputField label="Password" placeholder="Enter your password" value={password} onChangeText={setPassword}></InputField>
            <SimpleButton title="Log In" onPress={handleLogin} />
            <View style={styles.bottom_text_container}>
                <Text style={styles.text} onPress={()=>navigation.navigate("ForgotPassword")}> 
                    don't remember your password? <Text style={[styles.text, styles.accent]} onPress={()=>navigation.navigate("ForgotPassword")}>
                            reset here
                        </Text>
                </Text>
            </View>  
        </View>
    );
};

const styles = StyleSheet.create({
    top_bar_container: {
        flexDirection: 'row',
        gap: 16,
    },
    bottom_text_container:{
        flexDirection: 'column',
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
    text: {
        color: COLORS.primary,
        fontSize: 14,
    },
    accent: {
        color: COLORS.accent,
    },
});

export default LoginScreen;