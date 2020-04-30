import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'
import TimerInput from './TimerInput'

class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //will display Work Timer/Break Timer text
            timerText: "Work Timer",
            //will display Start/Reset
            startText: "Start",
            //will display Pause/Resume
            resetText: "Reset",
            isWorking: true,
            isStarting: false,
            isReseting: false,
            time: null,
        }
    }
    
    startHandler() {
        this.setState({
            startText: !this.state.isStarting ? "Pause" : "Start",
            isStarting: !this.state.isStarting
        })
        console.log(this.state.isStarting)
    }

    resetHandler() {
        this.setState({
            resetText: !this.state.isReseting ? "Resume" : "Reset",
            isReseting: !this.state.isReseting
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.timerText}>
                    {this.state.timerText}
                </Text>
                <View style={styles.buttonContainer}>
                    <Button title={this.state.startText} onPress={() => this.startHandler()} />
                    <Button title={this.state.resetText} onPress={() => this.resetHandler()} />
                </View>
                <TimerInput workText="Work Time: " minText="Mins: " secText="Secs: " />
                <TimerInput workText="Break Time:  " minText="Mins: " secText="Secs: " />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    timerText: {
        fontSize: 40
    },
    buttonContainer: {
        flexDirection: "row",
    },
});

export default Timer;