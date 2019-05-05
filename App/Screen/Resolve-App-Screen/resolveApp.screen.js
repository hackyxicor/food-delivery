import React, { Component } from 'react';
import LottieView from 'lottie-react-native';

import { View } from '../../UIComponents';

import { Colors } from '../../Constants/theme.constants';
import { GetToken } from '../../Logic/App.logic';

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
        const token = await GetToken();
        if (token.success) {
            this.props.navigation.replace('ResolveLocaiton');
            return;
        }

        this.props.navigation.replace('OnBoarding');
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

const styles = {
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
};

export default ResolveAppScreen;
