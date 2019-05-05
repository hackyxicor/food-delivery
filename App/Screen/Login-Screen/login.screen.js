import React, { Component } from 'react';
import { Keyboard } from 'react-native';

import { View, TextInput } from '../../UIComponents';
import JomboText from '../../Components/JobmoText/jobmoText.component';
import BottomStickButton from '../../Components/BottomStickButton/bottomStickButton.component';
import { Colors } from '../../Constants/theme.constants';
import PublicApi from '../../Api/public.api';
import NotifyService from '../../Services/notify.service';
import { IsMobilePhone } from '../../Utils/validation.utils';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            loading: false,
        }
    }

    login = async () => {
        const { mobile } = this.state;
        if (IsMobilePhone(mobile, 'Please enter correct mobile number')) {
            Keyboard.dismiss();
            this.setState({ loading: true });
            const result = await PublicApi.GetOTP();
            this.setState({ loading: false });
            if (result.success) {
                this.props.navigation.push('VerifyMobileNumber', { mobile })
            }
        }
    }

    render() {
        const { mobile, loading } = this.state;

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
                    loading={loading}
                    onPress={this.login}
                >
                    PROCEED
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
        justifyContent: 'flex-end',
    },
    jumboTextWrapper: {
        width: 340,
        alignItems: 'flex-start'
    }
};

export default LoginScreen;


