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
                            title: 'Onboarding',
                            subtitle: 'Done with React Native Onboarding Swiper',
                        },
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
