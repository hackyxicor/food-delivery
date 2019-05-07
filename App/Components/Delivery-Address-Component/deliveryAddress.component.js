import React from 'react';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';
import DeliveryAddressPlaceholder from './deliveryAddress.placeholder';

const DeliveryAddressComponent = ({ address, loading }) => (
    <DeliveryAddressPlaceholder
        loading={loading}
        onLoadComponent={() => (
            <TouchableOpacity
                style={styles.container}
                onPress={() => { navigation.navigate('SelectDeliveryLocation'); }}
            >
                <View style={{ flexDirection: 'row' }} >
                    <View style={{ flex: 1, padding: 1, alignItems: 'center', justifyContent: 'center' }} >
                        <MDI name="map-marker" size={30} color={Colors.DarkPrimary} />
                    </View>
                    <View style={{ flex: 9 }} >
                        <View style={{ flexDirection: 'row', padding: 1 }} >
                            <Text style={styles.bigText} >{address ? address.street : ''}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', padding: 1 }} >
                            <Text style={styles.microText} >{address ? address.adminArea5 : ''}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )}
    />
)


const styles = {
    container: {
        padding: 5,
    },
    smallText: {
        fontSize: 12,
        color: Colors.Success,
        fontWeight: '300',
        marginLeft: 2,
    },
    bigText: {
        fontSize: 14,
        color: Colors.PrimaryText,
        fontWeight: '400'
    },
    microText: {
        fontSize: 11,
        color: Colors.SecondaryText,
        fontWeight: '300'
    }
};


export default DeliveryAddressComponent;