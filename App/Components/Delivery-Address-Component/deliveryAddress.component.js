import React from 'react';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from '../../UIComponents';
import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../../Constants/theme.constants';

const DeliveryAddressComponent = ({ address }) => (
    <React.Fragment>
        <View style={{ flexDirection: 'row', padding: 1 }} >
            <MDI name="map-marker" size={16} color={Colors.PrimaryText} />
            <Text style={styles.smallText} >YOUR LOCATION</Text>
        </View>
        <View style={{ flexDirection: 'row', padding: 1 }} >
            <Text style={styles.bigText} >HOME - BTM 2nd Stage</Text>
        </View>
        <View style={{ flexDirection: 'row', padding: 1 }} >
            <Text style={styles.microText} >door no. 10, 3rd floor, #35, 3rd C Cross, 24th Main, BTM Layout</Text>
        </View>
    </React.Fragment>
)


const styles = ScaledSheet.create({
    smallText: {
        fontSize: 12,
        color: Colors.PrimaryText,
        fontWeight: '300'
    },
    bigText: {
        fontSize: 18,
        color: Colors.PrimaryText,
        fontWeight: '400'
    },
    microText: {
        fontSize: 10,
        color: Colors.SecondaryText,
        fontWeight: '300'
    }
})


export default DeliveryAddressComponent;