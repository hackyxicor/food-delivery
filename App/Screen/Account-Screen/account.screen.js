import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text } from '../../UIComponents';
import LottieView from 'lottie-react-native';
import { Colors } from '../../Constants/theme.constants';

class AcctountScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={{ flexDirection: 'row', padding: 1, justifyContent: 'flex-start', alignItems: 'center' }} >
                    <Text style={styles.textBig} >HIMANSHU KUSHWAH</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 5, justifyContent: 'flex-start', alignItems: 'center' }} >
                    <Text style={styles.secondaryText} >9731702355</Text>
                    <Text style={styles.secondaryText} >hkxicor@gmail.com</Text>
                </View>
            </View>
        );
    }
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 30
    },
    textBig: {
        fontSize: 24,
        fontWeight: '500',
        color: Colors.PrimaryText
    },
    secondaryText: {
        fontSize: 16,
        fontWeight: '300',
        color: Colors.SecondaryText,
        marginRight: 10
    }
})

export default AcctountScreen;