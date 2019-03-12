// import {
//     PlaceholderContainer,
//     Placeholder
// } from 'react-native-loading-placeholder';
// import LinearGradient from 'react-native-linear-gradient';

import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';

import { View } from '../../UIComponents';

import { Colors } from '../../Constants/theme.constants';

const HomeScreenPlaceholder = () => (
    <View style={styles.container} >
        <View style={[styles.darkShadow, { width: 100, heigh: 100 }]} />
    </View>
)

const styles = ScaledSheet.create({
    container: {
        flex: 1,
    },
    darkShadow: {
        backgroundColor: Colors.PrimaryText
    }
})

export default HomeScreenPlaceholder;
