import React, { Component } from 'react';

import { View, TextInput, ScrollView } from '../../UIComponents';
import JomboText from '../../Components/JobmoText/jobmoText.component';
import BottomStickButton from '../../Components/BottomStickButton/bottomStickButton.component';
import { Colors } from '../../Constants/theme.constants';

class SetupAccountScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
        }
    }

    render() {
        const { name, email } = this.state;

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
                    onPress={() => this.props.navigation.push('ResolveLocaiton')}
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

export default SetupAccountScreen;


