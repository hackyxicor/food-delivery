import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

import { View } from '../../UIComponents';

import { Colors } from '../../Constants/theme.constants';

class ResolveAppScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Bars size={10} color={Colors.OnPrimary} />
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
})

export default ResolveAppScreen;
