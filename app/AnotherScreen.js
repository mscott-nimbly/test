import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class AnotherScreen extends Component {

    constructor() {
        super();

        this.state = {
            message: null,
        }
    }

    componentDidMount() {
        fetch("http://www.google.com")
            .then(results => {
                this.setState({
                    message: 'Success'
                })
            })
            .catch(e => {
                this.setState({
                    message: "Failed"
                })
            })
    }
    render() {
        return (
            <View>
                <Text>{this.state.message}</Text>
            </View>
        )
    }
}
