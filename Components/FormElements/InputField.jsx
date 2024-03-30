import React from 'react';
import { TextInput , StyleSheet,View,Text} from 'react-native';
import { COLORS } from '../../Data/Colors';

const InputField = ({value,label,onChangeText,placeholder,styles}) => {
    return (
        <View style={input_styles.input_field_container}>
            <Text style={input_styles.label}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#FFFFFF44"
                style={[input_styles.input,styles]}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const input_styles = StyleSheet.create({
    label: {
        color: COLORS.primary,
        fontSize: 16,
    },
    input_field_container: {
        gap: 8,
        width: '100%',
    },
    input: {
        height: 40,
        backgroundColor: COLORS.neutral2,
        borderRadius: 4,
        padding: 8,
        color: COLORS.primary,
    },
});


export default InputField;

