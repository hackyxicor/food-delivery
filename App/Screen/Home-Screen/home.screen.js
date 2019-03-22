import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text, Image, ScrollView } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreenPlaceholder from './home.loader';
import DeliveryAddressComponent from '../../Components/Delivery-Address-Component/deliveryAddress.component';
import OffersHorizontalSlider from '../../Components/Offers-Horizontal-Slider/offersHorizontalSlider.component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomSheetService from '../../Services/bottomSheet.service';
import RestaurantCard from '../../Components/Restaurant-Card/restaurantCard.component';


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
            ],
            restaurants: [
                {
                    id: 1,
                },
                {
                    id: 2,
                },
                {
                    id: 3,
                },
                {
                    id: 4,
                },
                {
                    id: 5,
                }
            ]
        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 4000)
    }

    RenderFilterSection = () => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 40, paddingLeft: 10, paddingRight: 10 }} >
                <Text>515 Restaurants</Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row', padding: 2, alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => BottomSheetService.open('FILTER')}
                >
                    <MDI
                        name={'tune-vertical'}
                        size={22}
                        color={Colors.PrimaryText}
                    />
                    <Text style={{ marginLeft: 5 }} >SORT/FILTER</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const { loading, offers, restaurants } = this.state;

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
                <ScrollView
                    style={styles.scrollWrapper}
                    contentContainerStyle={{ paddingBottom: 100 }}
                >
                    <OffersHorizontalSlider offers={offers} />
                    <this.RenderFilterSection />
                    {
                        restaurants.map((item) => (
                            <RestaurantCard key={String(item.id)} />
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = ScaledSheet.create({
    image: {
        width: 300,
        height: 300,
    },
    scrollWrapper: {

    },
    headerWrapper: {
        height: 70,
        borderBottomWidth: 1,
        borderColor: Colors.Devider,
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
