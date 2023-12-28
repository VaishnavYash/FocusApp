import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { color } from './src/utils/colors'
import { Focus } from './src/features/focus'
import { Timer } from './src/features/timer' 
import { FocusHistory } from './src/features/focushistory';
import { spacing } from './src/utils/size';

export default function App() {
  const [currentText, setCurrentText] = useState(null)
  const [history, setHistory] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      {!currentText ? (
        <View >
          <Focus addSubject = {setCurrentText} />
          <FocusHistory  history = {history} />
        </View>
        ) : (
        <Timer
          focusSubject = {currentText}
          onTimerEnd = {(subject) => {
            setHistory([...history, subject])
          }}
          clearSubject = {() => {setCurrentText(null)}}
          />
        )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: color.veryLightBlue,
  },
});
