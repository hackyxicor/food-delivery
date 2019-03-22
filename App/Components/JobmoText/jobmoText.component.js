import React, { PureComponent } from 'react';
import { ScaledSheet } from 'react-native-size-matters';

import { View, Text } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';


class JumboText extends PureComponent {
    render() {
        const { text, description } = this.props;
        return (
            <View style={styles.container} >
                <Text style={styles.text}>{text}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        )
    }
}

const styles = ScaledSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    text: {
        fontSize: '20@ms0.3',
        fontWeight: '500',
        color: Colors.PrimaryText
    },
    description: {
        fontSize: '14@ms0.3',
        fontWeight: '300',
        color: Colors.SecondaryText
    }
})

export default JumboText;
