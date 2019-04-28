import React from 'react';
import { FlatList, TouchableOpacity, Image } from '../../UIComponents';
import RestaurantCard from '../Restaurant-Card/restaurantCard.component';

const SpecialHorizontalScroll = ({ restaurants, navigation }) => (
    <FlatList
        style={styles.list}
        contentContainerStyle={styles.container}
        data={restaurants}
        renderItem={({ item }) => {
            return (
                <RestaurantCard
                    key={String(item.id)}
                    navigation={navigation}
                />
            )
        }}
        horizontal
        keyExtractor={(item) => String(item.id)}
    />
)


const styles = {
    list: {
    },
    imageWrapper: {
        width: 250,
        height: 250,
        margin: 5,
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 10,
        padding: 5
    },
    container: {
        alignItems: 'center',
        height: 250
    }
};


export default SpecialHorizontalScroll;