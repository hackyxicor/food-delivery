import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { renderAfterInteractions } from 'react-native-interactions';

import { View, Text } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';

@renderAfterInteractions({ placeholder: <CheapPlaceholder /> })
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container} >
            </View>
        )
    }
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.Surface
    }
});

export default HomeScreen;
