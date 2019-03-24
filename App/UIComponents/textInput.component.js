import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';
import { Colors } from '../Constants/theme.constants';

import { Button } from 'react-native-paper';
import { Stylify } from '../Utils/dimensionHandler.utils';


class UITextInput extends Component {
    render() {
        return (
            <TextInput
                mode='flat'
                style={Stylify(styles.textInput)}
                {...this.props}
            />
        )
    }
}

const styles = {
    textInput: {
        backgroundColor: Colors.OnSurface,
        width: 300,
        height: 50
    }
};

export default UITextInput;