import React, { Component } from 'react';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux';
import { GetUserAction } from '../../Actions/index.action';

import { View } from '../../UIComponents';

import { Colors } from '../../Constants/theme.constants';
import { GetToken } from '../../Logic/App.logic';
import { resetToScreen } from '../../Services/navigation.service';

class ResolveAppScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        this.animation.play();
        this.handleFirstTime();
    }

    handleFirstTime = async () => {
        const token = await GetToken();
        if (token.success) {
            this.props.GetUserAction();
            return;
        }

        resetToScreen('OnBoarding');
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

export default connect(null, { GetUserAction })(ResolveAppScreen);
