import React from 'react';
import { FlatList, TouchableOpacity, Image, View, Text } from '../../UIComponents';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import FastImage from 'react-native-fast-image'

import { Colors } from '../../Constants/theme.constants';
import { navigate } from '../../Services/navigation.service';

const RestaurantCard = ({ restaurant, width }) => (
    <TouchableOpacity
        style={{ ...styles.container, ...{ width: width || 360 } }}
        onPress={() => navigate('Restaurant')}
    >
        <React.Fragment>
            <View style={{ flex: 1 }} >
                <Image
                    style={styles.image}
                    source={{ uri: restaurant.image }}
                    resizeMode={FastImage.resizeMode.cover}
                />
            </View>
            <View style={{ flex: 2 }} >
                <Text style={styles.textBig} >{restaurant.name}</Text>
                <Text style={styles.textMedium} >{restaurant.content}</Text>
                <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'flex-start' }} >
                    <MDI
                        name='tag'
                        size={20}
                        color={Colors.DarkPrimary}
                    />
                    <Text
                        style={{ ...styles.textMedium, ...{ color: Colors.DarkPrimary, marginLeft: 5 } }} >
                        20% discount on all orders
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'flex-start' }} >
                    <MDI
                        name='bike'
                        size={20}
                        color={Colors.Primary}
                    />
                    <Text style={{ ...styles.textMedium, ...{ color: Colors.Primary, marginLeft: 5 } }} > Free delivery</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                    <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'flex-start' }} >
                        <MDI
                            name='star'
                            size={20}
                            color={Colors.SecondaryText}
                        />
                        <Text style={[styles.textMedium, { color: Colors.SecondaryText }]} >{restaurant.rating}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'flex-start' }} >
                        <Text style={[styles.textMedium, { color: Colors.SecondaryText }]} >{`${restaurant.min_order_time} - ${restaurant.max_order_time} Mins`}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'flex-start' }} >
                        <MDI
                            name='currency-usd'
                            size={20}
                            color={Colors.SecondaryText}
                        />
                        <Text style={[styles.textMedium, { color: Colors.SecondaryText, marginLeft: 5 }]} >{`${restaurant.cost_per_person}`}</Text>
                    </View>
                </View>
            </View>
        </React.Fragment>
    </TouchableOpacity >
)


const styles = {
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10
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