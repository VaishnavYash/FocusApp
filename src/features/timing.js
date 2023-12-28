import React from "react";
import { View, StyleSheet } from 'react-native';
import { RoundedButton } from "../Component/roundedBtn";


export const Timing = ({ onChangeTiming }) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.buttonContainer}>
                <RoundedButton
                    title = "5"
                    size={75}
                    onPress = {() => onChangeTiming(5)}
                />
            </View>
            <View style = {styles.buttonContainer}>
                <RoundedButton
                    title = "10"
                    size={75}
                    onPress = {() => onChangeTiming(10)}
                />
            </View>
            <View style = {styles.buttonContainer}>
                <RoundedButton
                    title = "15"
                    size={75}
                    onPress = {() => onChangeTiming(15)}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
    },
    buttonContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
