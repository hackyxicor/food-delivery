import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import Onboarding from 'react-native-onboarding-swiper';

import { View } from '../../UIComponents';

import { Colors } from '../../Constants/theme.constants';

class OnBoardingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    done = () => {
        this.props.navigation.navigate('Tabs');
    }

    render() {
        return (
            <View style={styles.container}>
                <Onboarding
                    pages={[
                        {
                            backgroundColor: '#fff',
                            title: 'Order',
                            subtitle: 'Oder all you want from your favorite stores',
                        },
                        {
                            backgroundColor: '#fff',
                            title: 'Pick Delivery Time',
                            subtitle: 'Receive your order in less than 1 hour.\n Or pick a specific delivery time',
                        },
                        {
                            backgroundColor: '#fff',
                            title: 'Get Your Order',
                            subtitle: 'Real-time tracking will keep you posted about order progress.',
                        }
                    ]}
                    onSkip={() => this.done()}
                    onDone={() => this.done()}
                />
            </View>
        )
    }
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default OnBoardingScreen;
