import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, ScrollView } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { FAB } from 'react-native-paper';
import Placeholder, { Line } from "rn-placeholder";

import HomeScreenPlaceholder from './home.loader';
import DeliveryAddressComponent from '../../Components/Delivery-Address-Component/deliveryAddress.component';
import OffersHorizontalSlider from '../../Components/Offers-Horizontal-Slider/offersHorizontalSlider.component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BottomSheetService from '../../Services/bottomSheet.service';
import RestaurantCard from '../../Components/Restaurant-Card/restaurantCard.component';
import SpecialHorizontalScroll from '../../Components/Specials-Horizontal-Scroll/specialHorizontalScroll.component';

import { GetOffersAction, GetRestaurantsAction, GetAddressAction } from '../../Actions/index.action';
import GenericListing from '../../Components/Generic-Listing/genericListing.component';

class HomeScreen extends Component {
    componentDidMount = () => {
        this.props.GetOffersAction();
        this.props.GetRestaurantsAction();
        this.props.GetAddressAction();
    }

    RenderFilterSection = () => {
        return (
            <Placeholder
                isReady={!this.props.restaurants.loading}
                animation="fade"
                whenReadyRender={() => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: 40 }} >
                        <Text style={{ color: Colors.SecondaryText, fontWeight: '400', fontSize: 16 }} >
                            {`${this.props.restaurants.restaurants.length} Restaurants`}
                        </Text>
                    </View>
                )}
            >
                <Line style={{ width: '40%', marginTop: 20, marginBottom: 20, height: 25 }} />
            </Placeholder>
        )
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.headerWrapper} >
                    <DeliveryAddressComponent
                        address={this.props.location.address}
                        loading={this.props.location.loading}
                    />
                </View>
                <ScrollView
                    style={styles.scrollWrapper}
                    contentContainerStyle={{ paddingBottom: 50 }}
                >
                    <View style={{ paddingTop: 10 }} >
                        <OffersHorizontalSlider
                            loading={this.props.offers.loading}
                            offers={this.props.offers.offers}
                        />
                    </View>
                    <View style={{ padding: 10 }} >
                        <View style={{}} >
                            <View style={{ borderRadius: 1, height: 45, borderWidth: 1, borderColor: Colors.Devider, borderStyle: 'dashed' }} >

                            </View>
                        </View>
                        <this.RenderFilterSection />
                        <GenericListing
                            data={this.props.restaurants.restaurants}
                            renderComponent={({ item }) => (
                                <RestaurantCard
                                    key={String(item.id)}
                                    restaurant={item}
                                />
                            )}
                            loading={this.props.restaurants.loading}
                        />
                    </View>
                    {/* <SpecialHorizontalScroll
                        navigation={navigation}
                        restaurants={restaurants}
                    /> */}
                </ScrollView>
                {
                    !this.props.restaurants.loading ?
                        <FAB
                            label='Filter'
                            style={styles.fab}
                            icon={() => (
                                <MDI
                                    name={'tune-vertical'}
                                    size={22}
                                    color={Colors.Surface}
                                />
                            )}
                            onPress={() => BottomSheetService.open('FILTER')}
                        /> : null
                }
            </View>
        )
    }
}

const styles = {
    image: {
        width: 300,
        height: 300,
    },
    container: {

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
        bottom: 60,
        backgroundColor: Colors.Primary
    },
};

const mapStateToProps = state => ({
    offers: state.offers,
    restaurants: state.restaurants,
    location: state.location
});

export default connect(mapStateToProps, { GetOffersAction, GetRestaurantsAction, GetAddressAction })(HomeScreen);
