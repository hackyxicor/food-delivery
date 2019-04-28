import React from 'react';
import { FlatList, TouchableOpacity, Image, View, Text } from '../../UIComponents';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../../Constants/theme.constants';

const RestaurantCard = ({ navigation, width }) => (
    <TouchableOpacity
        style={{ ...styles.container, ...{ width: width || 360 } }}
        onPress={() => navigation.navigate('Restaurant')}
    >
        <React.Fragment>
            <View style={{ flex: 1 }} >
                <View style={styles.image} />
                {/* <Image style={styles.image} source={{ uri: 'https://drop.ndtv.com/albums/COOKS/chinese-vegetarian/rollsspring_640x480.jpg?output-format=webp' }} /> */}
            </View>
            <View style={{ flex: 2 }} >
                <Text style={styles.textBig} >Restaurant Title</Text>
                <Text style={styles.textMedium} >North Indian, Tandoor, Chinese...</Text>
                <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'flex-start' }} >
                    <MDI
                        name='tag'
                        size={20}
                        color={Colors.DarkPrimary}
                    />
                    <Text style={{ ...styles.textMedium, ...{ color: Colors.DarkPrimary, marginLeft: 5 } }} r >20% discount on all orders</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'flex-start' }} >
                    <MDI
                        name='bike'
                        size={20}
                        color={Colors.Primary}
                    />
                    <Text style={{ ...styles.textMedium, ...{ color: Colors.Primary, marginLeft: 5 } }} r > Free delivery</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'flex-start' }} >
                        <MDI
                            name='star'
                            size={20}
                            color={Colors.SecondaryText}
                        />
                        <Text style={[styles.textMedium, { color: Colors.SecondaryText, marginLeft: 5 }]} >4.1</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'flex-start' }} >
                        <Text style={[styles.textMedium, { color: Colors.SecondaryText, marginLeft: 5 }]} >32 mins</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'flex-start' }} >
                        <MDI
                            name='currency-usd'
                            size={20}
                            color={Colors.SecondaryText}
                        />
                        <Text style={[styles.textMedium, { color: Colors.SecondaryText, marginLeft: 5 }]} >300 for 2</Text>
                    </View>
                </View>
            </View>
        </React.Fragment>
    </TouchableOpacity >
)


const styles = {
    container: {
        flexDirection: 'row',
        padding: 10,
    },
    textBig: {
        fontSize: 18,
        color: Colors.PrimaryText
    },
    textMedium: {
        fontSize: 14,
    },
    image: {
        width: 90,
        height: 90,
        backgroundColor: Colors.Inactive
    }
};


export default RestaurantCard;