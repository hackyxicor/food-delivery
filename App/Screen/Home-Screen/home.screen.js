import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text, Image } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';

import HomeScreenPlaceholder from './home.loader';
import DeliveryAddressComponent from '../../Components/Delivery-Address-Component/deliveryAddress.component';
import OffersHorizontalSlider from '../../Components/Offers-Horizontal-Slider/offersHorizontalSlider.component';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            offers: [
                {
                    id: 1,
                    source: { uri: 'https://static.vecteezy.com/system/resources/previews/000/330/970/large_2x/vector-best-offer-geometric-banner.jpg' }
                },
                {
                    id: 2,
                    source: { uri: 'https://static.vecteezy.com/system/resources/previews/000/330/970/large_2x/vector-best-offer-geometric-banner.jpg' }
                },
                {
                    id: 3,
                    source: { uri: 'https://static.vecteezy.com/system/resources/previews/000/330/970/large_2x/vector-best-offer-geometric-banner.jpg' }
                },
                {
                    id: 4,
                    source: { uri: 'https://static.vecteezy.com/system/resources/previews/000/330/970/large_2x/vector-best-offer-geometric-banner.jpg' }
                },
                {
                    id: 5,
                    source: { uri: 'https://static.vecteezy.com/system/resources/previews/000/330/970/large_2x/vector-best-offer-geometric-banner.jpg' }
                }
            ]
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 4000)
    }

    render() {
        const { loading, offers } = this.state;

        if (loading) {
            return (
                <React.Fragment>
                    <HomeScreenPlaceholder />
                </React.Fragment>
            )
        }

        return (
            <View style={styles.container} >
                <View style={styles.headerWrapper} >
                    <DeliveryAddressComponent />
                </View>
                <OffersHorizontalSlider offers={offers} />
            </View>
        )
    }
}

const styles = ScaledSheet.create({
    image: {
        width: 300,
        height: 300,
    },
    headerWrapper: {
        height: 70,
        padding: 7,
        borderBottomWidth: 1,
        borderColor: Colors.Devider,
    },
    container: {
    },
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

export default HomeScreen;
