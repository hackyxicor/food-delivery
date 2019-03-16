import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { Bubbles } from 'react-native-loader';

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
        setTimeout(() => {
            this.handleFirstTime();
        }, 1000);
    }

    handleFirstTime = async () => {
        const isFirstTime = await IsFirstTimeAppUser();
        if (isFirstTime.success) {
            this.props.navigation.navigate('OnBoarding');
            return;
        }

        this.props.navigation.navigate('Tabs');
    }

    render() {
        return (
            <View style={styles.container}>
                <Bubbles size={10} color={Colors.OnPrimary} />
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
