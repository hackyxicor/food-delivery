import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from '../../UIComponents';

class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={{ height: 40, justifyContent: 'center' }} >
                    <Text style={{ fontSize: 16, color: Colors.PrimaryText }} >Item list</Text>
                </View>
                <FoodComponent />
                <FoodComponent />
                <View style={{ height: 40, justifyContent: 'center' }} >
                    <Text style={{ fontSize: 16, color: Colors.PrimaryText }} >Invoice</Text>
                </View>

                <View style={styles} >

                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    }
}