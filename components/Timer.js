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
            //Store the Work/Break Time Count Down string
            workCount: 300000,
            breakCount: 300000,
            //will display Work/Break Time Count Down text
            displayCount: 300000,
            //will display Start/Reset
            startText: "Start",
            //will display Pause/Resume
            resetText: "Reset",
            //store input time for work
            workInputMin: 0,
            workInputSec: 0,
            //store input time for break
            breakInputMin: 0,
            breakInputSec: 0,
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
                displayCount: prevState.displayCount - 1000,
            }))
        }, 1000);
    }

    componentDidUpdate() {
        if (this.state.displayCount < 0) {
            if (this.state.isWorking === true) {
                this.setState({
                    isWorking: false,
                    timerText: "Break Timer",
                    displayCount: this.state.breakCount
                })
            }
            else {
                this.setState({
                    isWorking: true,
                    timerText: "Work Timer",
                    displayCount: this.state.workCount
                })
            }
        }
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
        if (this.state.isWorking === true) {
            const defaultWork = 900000
            this.setState({
                workCount: defaultWork,
                displayCount: defaultWork,
            });
        } else {
            const defaultBreak = 900000
            this.setState({
                breakCount: defaultBreak,
                displayCount: defaultBreak
            });
        }
    }

    workInputHandlerMin = workCount => {
        if (this.state.isWorking === true) {
            if (this.state.workInputSec === 0) {
                const current = workCount * 60000
                this.setState({
                    workCount: workCount * 60000,
                    displayCount: workCount * 60000,
                    workInputMin: current,
                })
            } else {
                console.log("sec" + this.state.workInputSec)
                const current = workCount * 60000
                this.setState({
                    workCount: this.state.workInputSec + current,
                    displayCount: this.state.workInputSec + current,
                    workInputMin: current
                })
            }
        } else {
            if (this.state.workInputSec === 0) {
                const current = workCount * 60000
                this.setState({
                    workCount: workCount * 60000,
                    workInputMin: current,
                })
            } else {
                console.log("sec" + this.state.workInputSec)
                const current = workCount * 60000
                this.setState({
                    workCount: this.state.workInputSec + current,
                    workInputMin: current
                })
            }
        }
    }

    workInputHandlerSec = workCount => {
        if (this.state.isWorking === true) {
            if (this.state.workInputMin === 0) {
                console.log(this.state.workInputMin)
                const current = workCount * 1000
                this.setState({
                    workCount: current,
                    displayCount: current,
                    workInputSec: current
                })
            } else {
                console.log("min" + this.state.workInputMin)
                const current = workCount * 1000
                this.setState({
                    workCount: this.state.workInputMin + current,
                    displayCount: this.state.workInputMin + current,
                    workInputSec: current
                })
            }
        } else {
            if (this.state.workInputMin === 0) {
                console.log(this.state.workInputMin)
                const current = workCount * 1000
                this.setState({
                    workCount: workCount * 1000,
                    workInputSec: current
                })
            } else {
                console.log("min" + this.state.workInputMin)
                const current = workCount * 1000
                this.setState({
                    workCount: this.state.workInputMin + current,
                    workInputSec: current
                })
            }
        }
    }

    breakInputHandlerMin = breakCount => {
        if (this.state.isWorking === false) {
            if (this.state.breakInputSec === 0) {
                const current = breakCount * 60000
                this.setState({
                    breakCount: current,
                    displayCount: current,
                    breakInputMin: current,
                })
            } else {
                const current = breakCount * 60000
                this.setState({
                    breakCount: this.state.breakInputMin + current,
                    displayCount: this.state.breakInputMin + current,
                    breakInputMin: current
                });
            }
        } else {
            if (this.state.breakInputSec === 0) {
                const current = breakCount * 60000
                this.setState({
                    breakCount: current,
                    breakInputMin: current,
                })
            } else {
                const current = breakCount * 60000
                this.setState({
                    breakCount: this.state.breakInputMin + current,
                    breakInputMin: current
                });
            }
        }
    }

    breakInputHandlerSec = breakCount => {
        if (this.state.isWorking === false) {
            if (this.state.breakInputMin === 0) {
                const current = breakCount * 1000
                this.setState({
                    breakCount: current,
                    displayCount: current,
                    breakInputSec: current
                });
            } else {
                const current = breakCount * 1000
                this.setState({
                    breakCount: this.state.breakInputMin + current,
                    displayCount: this.state.breakInputMin + current,
                    breakInputSec: current
                });
            }
        } else {
            if (this.state.breakInputMin === 0) {
                const current = breakCount * 1000
                this.setState({
                    breakCount: current,
                    breakInputSec: current
                });
            } else {
                const current = breakCount * 1000
                this.setState({
                    breakCount: this.state.breakInputMin + current,
                    breakInputSec: current
                });
            }
        }
    }

    render() {
        const duration = moment.duration(this.state.displayCount)
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
                <TimerText workText="Work Time: " minText="Mins: " secText="Secs: " valueMin={this.state.workCount} valueSec={this.state.workCount} functionMin={this.workInputHandlerMin} functionSec={this.workInputHandlerSec} />
                <TimerText workText="Break Time:  " minText="Mins: " secText="Secs: " valueMin={this.state.breakInputMin} valueSec={this.state.breakInputSec} functionMin={this.breakInputHandlerMin} functionSec={this.breakInputHandlerSec} />
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