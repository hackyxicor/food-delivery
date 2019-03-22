import React from 'react';
import { Text, TouchableOpacity, View } from '../../UIComponents';
import { ScaledSheet } from 'react-native-size-matters';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../../Constants/theme.constants';

const MenuItem = ({ menuItemConfig, navigation }) => (
    <TouchableOpacity
        style={styles.containerWrap}
        onPress={() => navigation.push(menuItemConfig.route)}
    >
        <View
            style={styles.container}
        >
            <MDI
                style={{ marginRight: 20 }}
                name={menuItemConfig.icon}
                size={25}
                color={Colors.SecondaryText}
            />
            <Text style={styles.text} >{menuItemConfig.name}</Text>
        </View>
    </TouchableOpacity>
)

const styles = ScaledSheet.create({
    containerWrap: {
    },
    container: {
        height: 60,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 18,
        color: Colors.SecondaryText,
    }
})

export default MenuItem;
