import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import TimerInput from './TimerInput';

const TimerText = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputText} >
                {props.workText}
            </Text>
            <Text>
                {props.minText}
            </Text>
            <TimerInput value={props.valueMin} function={props.functionMin} />
            <Text>
                {props.secText}
            </Text>
            <TimerInput value={props.valueSec} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
    },
    inputText: {
        fontWeight: 'bold',
    },
})

export default TimerText;