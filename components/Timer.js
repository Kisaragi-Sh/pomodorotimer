import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'
import TimerText from './TimerText'
import moment from 'moment';

class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //will display Work Timer/Break Timer text
            timerText: "Work Timer",
            //will display Work/Break Time Count Down text
            workCount: 100,
            //will display Start/Reset
            startText: "Start",
            //will display Pause/Resume
            resetText: "Reset",
            //store input time for work
            workInputMin: "1",
            workInputSec: "2",
            //store input time for break
            breakInputMin: "3",
            breakInputSec: "4",
            isWorking: true,
            isStarting: false,
            isReseting: false,
        }
    }


    startWork() {
        this.setState(prevState => ({
            startText: "Pause",
            isStarting: !prevState.isStarting,
        }))
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                workCount: prevState.workCount - 1000,
            }))
        }, 1000);
    }

    pauseWork() {
        clearInterval(this.interval)
        this.setState(prevState => ({
            startText: "Start",
            isStarting: !prevState.isStarting
        }))
    }

    timerStartHandler() {
        if (!this.state.isStarting) {
            this.startWork()
        }
        else {
            this.pauseWork()
        }
    }

    resetHandler() {
        this.setState(prevState => ({
            resetText: !this.state.isReseting ? "Resume" : "Reset",
            isReseting: !prevState.isReseting
        }))
    }

    inputChangeHandlerMin = workCount => {
        this.setState({ workCount: workCount * 60000})
    }

    inputChangeHandlerSec = workCount => {
        this.setState({ workCount: workCount * 1000 })
    }

    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState(prevState => ({
    //             timerCount: prevState.timerCount - 1,
    //         }))
    //     }, 1000);
    // }

    render() {
        const duration = moment.duration(this.state.workCount)
        return (
            <View style={styles.container}>
                <Text style={styles.timerText}>
                    {this.state.timerText}
                </Text>
                <Text style={styles.countText} >
                    {duration.minutes()}:{duration.seconds()}
                </Text>
                <View style={styles.buttonContainer}>
                    <Button title={this.state.startText} onPress={() => this.timerStartHandler()} />
                    <Button title={this.state.resetText} onPress={() => this.resetHandler()} />
                </View>
                <TimerText workText="Work Time: " minText="Mins: " secText="Secs: " valueMin={this.state.workCount} valueSec={this.state.workCount} functionMin={this.inputChangeHandlerMin} functionSec={this.inputChangeHandlerSec} />
                <TimerText workText="Break Time:  " minText="Mins: " secText="Secs: " valueMin={this.state.breakInputMin} valueSec={this.state.breakInputSec} />
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
    countText: {
        fontSize: 70
    },
    buttonContainer: {
        flexDirection: "row",
    },
});

export default Timer;