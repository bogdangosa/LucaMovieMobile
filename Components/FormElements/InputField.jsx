import React from 'react';
import { TextInput , StyleSheet} from 'react-native';

const InputField = ({value,onChangeText,placeholder,styles}) => {
    return (
        <TextInput
            placeholder={placeholder}
            style={[input_styles.input,styles]}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

const input_styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});


export default InputField;

