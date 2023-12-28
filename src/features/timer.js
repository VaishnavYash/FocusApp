import React, { useState } from "react";
import { Text, View, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake'
import { Countdown } from "../Component/countDown";
import { spacing } from '../utils/size';
import { RoundedButton } from "../Component/roundedBtn";
import { color } from "../utils/colors";
import { Timing } from "./timing";


const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, clearSubject, onTimerEnd}) => {
    useKeepAwake();
    const [isStarted, setisStarted] = useState(false)
    const [progress, setProgress] = useState(1)
    const [minutes, setMinutes] = useState(0.1)

    const onEndTimer = (reset) => {
        Vibration.vibrate(PATTERN);
        setisStarted(false);
        setMinutes(minutes);
        setProgress(1);
        reset();
        onTimerEnd(focusSubject);
    };

    return (
        <View style = {styles.container}>
            <View style = {styles.countdown}>
                <Countdown 
                    minutes={minutes}
                    isPaused = {!isStarted}
                    onProgress = {setProgress}
                    onEnd={onEndTimer}
                    />
                
                <Text style = {styles.mainText}>
                    Focusing on :
                </Text>
                <Text style = {styles.otherText}>
                    {focusSubject}
                </Text>
            </View>
            <View style = {{ paddingHorizontal: spacing.lg, marginBottom: spacing.lg }}>
                <ProgressBar 
                    color = {color.darkBlue}
                    style = {{ height : spacing.sm }}
                    progress={ progress }
                    />
            </View>            
            <View style = {styles.timeContainer}>
                <Timing 
                    onChangeTiming = {setMinutes}
                    />
            </View>
            <View style = {styles.buttonContainer}>
                    {!isStarted && (
                        <RoundedButton 
                        size = {100}
                        title = "Start"
                        onPress = {() => setisStarted(true)}
                        />
                    )}

                    {isStarted && (
                        <RoundedButton 
                        size = {100}
                        title = "Pause"
                        onPress = {() => setisStarted(false)}
                        />
                    )}
            </View>
            <View style = {styles.clearTimerContainer}>
                <RoundedButton
                    title = "Clear"
                    size = {50}
                    onPress = {clearSubject}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeContainer: {
        flex:0.1,
        flexDirection: 'row',
        padding: spacing.md,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex:0.3,
        flexDirection: 'row',
        padding: spacing.md,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        color: color.darkBlue,
        marginTop: spacing.lg,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    otherText: {
        color: color.darkBlue,
        textAlign: 'center'
    },
    clearTimerContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
