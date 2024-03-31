import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet ,Text } from 'react-native';
import InputField from '../../Components/FormElements/InputField';
import SimpleButton from '../../Components/Buttons/SimpleButton';
import { COLORS } from '../../Data/Colors';
import axios from 'axios';

const ForgotPasswordScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleLogin = async() => {
        try {
            const response = await axios.post('http://188.24.126.250:5000/api/resetPassword', {
                email: email,
                password: newPassword
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
                <Text style={[styles.title, styles.accent]}>Forgot password</Text>
            </View>
            <InputField label="Email" placeholder="Enter your email adress" value={email} onChangeText={setEmail}></InputField>
            <InputField label="New password" placeholder="Enter your new password" value={email} onChangeText={setEmail}></InputField>
            <SimpleButton title="Reset password" onPress={handleLogin} />
            <View style={styles.bottom_text_container}>
                <Text style={styles.text} onPress={()=>navigation.navigate("ForgotPassword")}> 
                    you're just dumb? <Text style={[styles.text, styles.accent]} onPress={()=>navigation.navigate("Login")}>
                            login normally here
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

export default ForgotPasswordScreen;