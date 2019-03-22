import React, { Component } from 'react';
import { TouchableRipple } from 'react-native-paper';

class UITouchableOpacity extends Component {
    render() {
        return (
            <TouchableRipple
                rippleColor="rgba(0, 0, 0, .32)"
                {...this.props}
            >
                {this.props.children}
            </TouchableRipple>
        )
    }
}

export default UITouchableOpacity;