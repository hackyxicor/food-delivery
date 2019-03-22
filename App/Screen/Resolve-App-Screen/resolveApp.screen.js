import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { Bubbles } from 'react-native-loader';
import LottieView from 'lottie-react-native';

import { View } from '../../UIComponents';

import { Colors } from '../../Constants/theme.constants';
import { IsFirstTimeAppUser } from '../../Logic/App.logic';

class ResolveAppScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.animation.play();
        setTimeout(() => {
            this.handleFirstTime();
        }, 2000);
    }

    handleFirstTime = async () => {
        const isFirstTime = await IsFirstTimeAppUser();
        if (isFirstTime.success) {
            this.props.navigation.replace('OnBoarding');
            return;
        }

        this.props.navigation.replace('Login');
    }

    render() {
        return (
            <View style={styles.container}>
                <LottieView
                    style={styles.lottieView}
                    ref={animation => {
                        this.animation = animation;
                    }}
                    source={require('../../Assets/Lottie/loading.json')}
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
        backgroundColor: Colors.Primary
    },
    lottieView: {
        width: 150,
        height: 150
    },
})

export default ResolveAppScreen;
