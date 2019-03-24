import React, { Component } from 'react';
import { Text, TouchableRipple } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

import { Colors } from '../../Constants/theme.constants';
import { Stylify } from '../../Utils/dimensionHandler.utils';

const AnimatedTouchableRipple = Animatable.createAnimatableComponent(TouchableRipple);

class BottomStickButton extends Component {
    render() {
        return (
            <AnimatedTouchableRipple
                animation="fadeInUpBig"
                rippleColor="rgba(0, 0, 0, .32)"
                style={Stylify({ ...styles.wrapper })}
                {...this.props}
            >
                <Text
                    style={Stylify({ ...styles.text })}
                >
                    {this.props.children}
                </Text>
            </AnimatedTouchableRipple>
        )
    }
}

const styles = {
    wrapper: {
        width: 360,
        height: 50,
        backgroundColor: Colors.Primary,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: Colors.OnPrimary,
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center'
    }
}

export default BottomStickButton;