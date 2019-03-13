import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import LottieView from 'lottie-react-native';

import LocationService from '../../Services/location.service';

import { View, Text } from '../../UIComponents';

import { Colors } from '../../Constants/theme.constants';

class ResolveLocaitonScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.locationService = new LocationService();
    }

    componentDidMount() {
        this.animation.play();
        this.locationService.resolveLocationServiceState();
    }

    render() {
        return (
            <View style={styles.container}>
                <LottieView
                    style={styles.lottieView}
                    ref={animation => {
                        this.animation = animation;
                    }}
                    source={require('../../Assets/Lottie/location-pin.json')}
                />
                <View
                    style={styles.padding}
                >
                    <Text
                        style={styles.messageText}
                    >
                        Getting your location
                    </Text>
                </View>
            </View>
        )
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
        fontSize: 24,
        color: Colors.PrimaryText
    },
    padding: {
        marginTop: '200@s',
    }
})

export default ResolveLocaitonScreen;
