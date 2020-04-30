import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const TimerInput = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputText} >
                {props.workText}
            </Text>
            <Text>
                {props.minText}
            </Text>
            <TextInput style={styles.inputField} />
            <Text>
                {props.secText}
            </Text>
            <TextInput style={styles.inputField} />
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
    inputField: {
        borderColor: "black",
        borderWidth: 1,
        height: 25,
        width: 40,
    },
})

export default TimerInput;