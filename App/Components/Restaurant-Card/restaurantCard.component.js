import React from 'react';
import { FlatList, TouchableOpacity, Image, View, Text } from '../../UIComponents';
import { ScaledSheet } from 'react-native-size-matters';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../../Constants/theme.constants';

const RestaurantCard = ({ navigation }) => (
    <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Restaurant')}
    >
        <React.Fragment>
            <View style={{ flex: 1 }} >
                <Image style={styles.image} source={{ uri: 'https://drop.ndtv.com/albums/COOKS/chinese-vegetarian/rollsspring_640x480.jpg?output-format=webp' }} />
            </View>
            <View style={{ flex: 2 }} >
                <Text style={styles.textBig} >Restaurant Title</Text>
                <Text style={styles.textMedium} >North Indian, Tandoor, Chinese...</Text>
                <View style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'flex-start' }} >
                    <MDI
                        name='tag'
                        size={25}
                        color={Colors.Success}
                    />
                    <Text style={[styles.textMedium, { color: Colors.Success, marginLeft: 5 }]} >Free delivery, 10% off</Text>
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
                        <MDI
                            name='clock'
                            size={20}
                            color={Colors.SecondaryText}
                        />
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
    </TouchableOpacity>
)


const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 5,
    },
    textBig: {
        fontSize: 18,
        color: Colors.PrimaryText
    },
    textMedium: {
        fontSize: 14,
    },
    image: {
        width: '90@ms',
        height: '90@ms'
    }
})


export default RestaurantCard;