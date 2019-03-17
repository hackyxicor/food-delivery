import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text } from '../../UIComponents';
import LottieView from 'lottie-react-native';
import { Colors } from '../../Constants/theme.constants';

class OrdersScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={{ width: 200, height: 200 }} >
                    <LottieView
                        style={styles.lottieView}
                        ref={animation => {
                            this.animation = animation;
                        }}
                        source={require('../../Assets/Lottie/empty.json')}
                    />
                </View>
                <View
                    style={styles.padding}
                >
                    <Text
                        style={styles.messageText}
                    >
                        No Perevious Orders
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lottieView: {
    },
    messageText: {
        fontWeight: '500',
        fontSize: 20,
        color: Colors.SecondaryColor
    },
    padding: {
    }
})

export default OrdersScreen;