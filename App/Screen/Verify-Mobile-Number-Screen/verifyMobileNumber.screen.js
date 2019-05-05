import React, { Component } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';
import { Keyboard } from 'react-native';

import { View, TextInput } from '../../UIComponents';
import JomboText from '../../Components/JobmoText/jobmoText.component';
import BottomStickButton from '../../Components/BottomStickButton/bottomStickButton.component';
import { Colors } from '../../Constants/theme.constants';
import { IsOTP } from '../../Utils/validation.utils';
import PublicApi from '../../Api/public.api';
import { SetToken } from '../../Logic/App.logic';

class VerifyMobileNumberScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            otp: '',
            loading: false
        }
    }

    verifyOTP = async () => {
        const { otp } = this.state;

        if (IsOTP(otp, 'Please enter correct OTP')) {
            Keyboard.dismiss();
            this.setState({ loading: true });
            const result = await PublicApi.VerifyOTP();
            this.setState({ loading: false });

            const storeToken = await SetToken(result.response.token);
            if (result.success && storeToken.success) {
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'SetupAccount' })],
                });
                this.props.navigation.dispatch(resetAction);
            }
        }
    }

    render() {
        const { otp, loading } = this.state;

        return (
            <React.Fragment>
                <View style={styles.container} >
                    <View style={styles.jumboTextWrapper} >
                        <JomboText
                            text={'Verify mobile number'}
                            description={`Enter the OTP sent to ${this.props.mobile}`}
                        />
                    </View>
                    <View style={styles.positionFix2} >
                        <TextInput
                            label='Enter OTP'
                            value={otp}
                            placeholder="Enter OTP"
                            onChangeText={otp => this.setState({ otp })}
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <BottomStickButton
                    loading={loading}
                    onPress={this.verifyOTP}
                >
                    VERIFY AND CONTINUE
                </BottomStickButton>
            </React.Fragment>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    button: {
        width: 340,
        color: Colors.Primary,
        borderRadius: 10,
        padding: 10
    },
    positionFix: {
        height: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 25,
    },
    positionFix2: {
        height: 100,
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
    },
    jumboTextWrapper: {
        width: 340,
        alignItems: 'flex-start'
    }
};

export default VerifyMobileNumberScreen;


