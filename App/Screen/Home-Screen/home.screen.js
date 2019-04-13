import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { FAB } from 'react-native-paper';

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
            </View>
        )
    }

    render() {
        const { loading, offers, restaurants } = this.state;
        const navigation = this.props.navigation;

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
                    <DeliveryAddressComponent  navigation={this.props.navigation} />
                </View>
                <ScrollView
                    style={styles.scrollWrapper}
                    contentContainerStyle={{ paddingBottom: 100 }}
                >
                    <OffersHorizontalSlider offers={offers} />
                    <this.RenderFilterSection />
                    {
                        restaurants.map((item) => (
                            <RestaurantCard
                                key={String(item.id)}
                                navigation={navigation}
                            />
                        ))
                    }
                </ScrollView>
                <FAB
                    label='Sort/Filter'
                    style={styles.fab}
                    icon={() => (
                        <MDI
                            name={'tune-vertical'}
                            size={22}
                            color={Colors.Surface}
                        />
                    )}
                    onPress={() => BottomSheetService.open('FILTER')}
                />
            </View>
        )
    }
}

const styles = {
    image: {
        width: 300,
        height: 300,
    },
    scrollWrapper: {

    },
    headerWrapper: {
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
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 70,
        backgroundColor: Colors.Primary
    },
};

export default HomeScreen;
