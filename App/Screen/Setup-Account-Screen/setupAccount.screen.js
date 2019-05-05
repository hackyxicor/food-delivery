import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';

import { View, TextInput, ScrollView } from '../../UIComponents';
import JomboText from '../../Components/JobmoText/jobmoText.component';
import BottomStickButton from '../../Components/BottomStickButton/bottomStickButton.component';
import { Colors } from '../../Constants/theme.constants';
import { IsName, IsEmail } from '../../Utils/validation.utils';
import PrivateApi from '../../Api/private.api';
import { SetUserAction } from '../../Actions/index.action';
import { resetToScreen } from '../../Services/navigation.service';

class SetupAccountScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.user.display_name,
            email: props.user.email,
            loading: false,
        }
    }

    proceed = async () => {
        const { name, email } = this.state;

        if (
            IsName(name, 'Please enter correct name') &&
            IsEmail(email, 'Please enter correct email address')
        ) {
            Keyboard.dismiss();
            this.setState({ loading: true })
            const result = await PrivateApi.UpdateProfile();
            this.setState({ loading: false })
            if (result.success) {
                this.props.SetUserAction(result.response);
                resetToScreen('ResolveLocaiton');
            }
        }
    }

    render() {
        const { name, email, loading } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}
                >
                    <JomboText
                        text={'Setup Account'}
                        description={`Your invoice will be sent to this account`}
                    />
                    <View style={{ marginTop: 20 }} >
                        <TextInput
                            label='Name'
                            value={name}
                            placeholder="Enter full name"
                            onChangeText={name => this.setState({ name })}
                        />
                        <TextInput
                            label='Email'
                            value={email}
                            placeholder="Enter email address"
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
                </ScrollView>
                <BottomStickButton
                    loading={loading}
                    onPress={this.proceed}
                >
                    CONTINUE
                </BottomStickButton>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,

    },
    contentContainer: {
        alignItems: 'flex-start'
    },
};

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, { SetUserAction })(SetupAccountScreen);


