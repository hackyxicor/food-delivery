import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';

import { View, TextInput } from '../../UIComponents';
import JomboText from '../../Components/JobmoText/jobmoText.component';
import BottomStickButton from '../../Components/BottomStickButton/bottomStickButton.component';
import { Colors } from '../../Constants/theme.constants';


class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
        }
    }

    render() {
        const { mobile } = this.state;

        return (
            <React.Fragment>
                <View style={styles.container} >
                    <View style={styles.jumboTextWrapper} >
                        <JomboText
                            text={'Enter your mobile number'}
                            description={'Create an account with your 10 digit mobile number'}
                        />
                    </View>
                    <View style={styles.positionFix2} >
                        <TextInput
                            label='Mobile number'
                            value={mobile}
                            placeholder="Enter your mobile number"
                            onChangeText={mobile => this.setState({ mobile })}
                            keyboardType="phone-pad"
                        />
                    </View>
                </View>
                <BottomStickButton
                    onPress={() => this.props.navigation.push('VerifyMobileNumber', { mobile })}
                >
                    PROCEED
                </BottomStickButton>
            </React.Fragment>
        )
    }
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        alignItems: 'center'
    },
    button: {
        width: '340@ms',
        color: Colors.Primary,
        borderRadius: 10,
        padding: 10
    },
    positionFix: {
        height: '10@ms',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 25,
    },
    positionFix2: {
        height: '100@ms',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    jumboTextWrapper: {
        width: '340@ms',
        alignItems: 'flex-start'
    }
});

export default LoginScreen;


