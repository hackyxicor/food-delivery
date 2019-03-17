import React, { Component } from 'react';
import { TextInput } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../Constants/theme.constants';

import { Button } from 'react-native-paper';


class UITextInput extends Component {
    render() {
        return (
            <TextInput
                mode='flat'
                style={styles.textInput}
                {...this.props}
            />
        )
    }
}


const styles = ScaledSheet.create({
    textInput: {
        backgroundColor: Colors.OnSurface,
        width: '340@ms',
    }
});

export default UITextInput;