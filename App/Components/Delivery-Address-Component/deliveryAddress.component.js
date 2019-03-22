import React from 'react';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from '../../UIComponents';
import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../../Constants/theme.constants';
import BottomSheetService from '../../Services/bottomSheet.service';

const DeliveryAddressComponent = ({ address }) => (
    <TouchableOpacity
        style={styles.container}
        onPress={() => { BottomSheetService.open() }}
    >
        <React.Fragment>
            <View style={{ flexDirection: 'row', padding: 1, alignItems: 'center' }} >
                <MDI name="map-marker" size={14} color={Colors.PrimaryText} />
                <Text style={styles.smallText} >YOUR LOCATION</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 1 }} >
                <Text style={styles.bigText} >HOME - BTM 2nd Stage</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 1 }} >
                <Text style={styles.microText} >door no. 10, 3rd floor, #35, 3rd C Cross, 24th Main, BTM Layout</Text>
            </View>
        </React.Fragment>
    </TouchableOpacity>
)


const styles = ScaledSheet.create({
    container: {
        padding: 7,
    },
    smallText: {
        fontSize: 10,
        color: Colors.PrimaryText,
        fontWeight: '300',
        marginLeft: 2,
    },
    bigText: {
        fontSize: 16,
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