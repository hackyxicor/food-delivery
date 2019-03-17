import React, { Component } from 'react';
import { Text, TouchableRipple } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../../Constants/theme.constants';

class BottomStickButton extends Component {
    render() {
        return (
            <TouchableRipple
                rippleColor="rgba(0, 0, 0, .32)"
                style={styles.wrapper}
                {...this.props}
            >
                <Text
                    style={styles.text}
                >
                    {this.props.children}
                </Text>
            </TouchableRipple>
        )
    }
}

const styles = ScaledSheet.create({
    wrapper: {
        width: '380@ms',
        height: 60,
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
        fontSize: '16@ms0.3'
    }
})

export default BottomStickButton;