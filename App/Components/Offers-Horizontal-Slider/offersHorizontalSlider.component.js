import React from 'react';
import { FlatList, TouchableOpacity, Image } from '../../UIComponents';

const OffersHorizontalSlider = ({ offers }) => (
    <FlatList
        style={styles.list}
        contentContainerStyle={styles.container}
        data={offers}
        renderItem={({ item }) => {
            return (
                <TouchableOpacity
                    style={styles.imageWrapper}
                    onPress={() => { }}
                >
                    <Image source={item.source} style={styles.image} />
                </TouchableOpacity>
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


export default OffersHorizontalSlider;