import React from 'react';
import { FlatList, TouchableOpacity, Image } from '../../UIComponents';
import OffersHorizontalSliderPlaceholder from './offersHorizontalSlider.placeholder';
import FastImage from 'react-native-fast-image'

const OffersHorizontalSlider = ({ offers, loading }) => (
    <OffersHorizontalSliderPlaceholder
        loading={loading}
        onLoadComponent={() => (
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
                            <Image resizeMode={FastImage.resizeMode.cover} source={{ uri: item.image }} style={styles.image} />
                        </TouchableOpacity>
                    )
                }}
                horizontal
                keyExtractor={(item) => String(item.id)}
            />
        )}
    />
)


const styles = {
    list: {
    },
    imageWrapper: {
        width: 150,
        height: 150,
        margin: 5,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        padding: 5,
        resizeMode: 'cover'
    },
    container: {
        alignItems: 'center',
        height: 150
    }
};


export default OffersHorizontalSlider;