import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';

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
            <React.Fragment>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}
                >
                    <View style={styles.jumboTextWrapper} >
                        <JomboText
                            text={'Setup Account'}
                            description={`Your invoice will be sent to this account`}
                        />
                    </View>
                    <View style={styles.positionFix2} >
                        <TextInput
                            label='Name'
                            value={name}
                            placeholder="Enter full name"
                            onChangeText={name => this.setState({ name })}
                        />
                    </View>
                    <View style={styles.positionFix2} >
                        <TextInput
                            label='Email'
                            value={email}
                            placeholder="Enter email address"
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>
                </ScrollView>
                <BottomStickButton
                    onPress={() => this.props.navigation.push('Tabs')}
                >
                    CONTINUE
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
    },
    contentContainer: {
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
        height: '70@ms',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    jumboTextWrapper: {
        width: '340@ms',
        alignItems: 'flex-start'
    }
});

export default SetupAccountScreen;


