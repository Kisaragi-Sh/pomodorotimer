import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

class TimerInput extends React.Component {
    render() {
        return (
            <TextInput style={styles.inputField} onChangeText={this.props.function} value={this.props.value} />
        )
    }
}

const styles = StyleSheet.create({
    inputField: {
        borderColor: "black",
        borderWidth: 1,
        height: 35,
        width: 40,
    },
})

export default TimerInput;