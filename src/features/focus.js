import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { color } from '../utils/colors';
import { RoundedButton } from '../Component/roundedBtn';
import { spacing } from '../utils/size'

export const Focus = ({ addSubject }) => {
    const [inputText, setInputText] = useState(null)
    
    return (
        <View>
            <View style = {styles.inputContainer}>
                <TextInput
                    style = {styles.textInputContainer}
                    onChangeText={setInputText}
                    label ="What would you like to focus on?"
                />
                <View style={styles.buttonContainer}>
                    <RoundedButton                        
                        title = "Start"
                        size = {50}
                        onPress = {() => addSubject(inputText)} 
                    />
                </View>
            </View>    
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        margin: spacing.xl,
        justifyContent: 'top',
        flexDirection: 'row'
    },
    textInputContainer: {
        flex: 1,
        backgroundColor: color.white,
        marginRight: spacing.md
    },
    buttonContainer: {
        justifyContent: 'center'
    },
    text: {
        color: color.white,
    }
});
