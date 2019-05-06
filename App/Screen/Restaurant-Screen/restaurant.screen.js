import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { connect } from 'react-redux';
import { View, ScrollView, TouchableOpacity, Text, Image } from '../../UIComponents';
import { FAB, Portal } from 'react-native-paper';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../Constants/theme.constants';
import BottomSheetService from '../../Services/bottomSheet.service';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { Switch } from 'react-native-paper';
import CartButtonComponent from '../../Components/Cart-Button-Component/cartButton.component';
import FoodComponent from '../../Components/FoodComponent/food.component';

import { GetRestaurantDetailAction, UpdateCartAction } from '../../Actions/index.action';
import RestaurantScreenPlaceholder from './restaurant.placeholder';
import { DisplayPrice } from '../../Utils/common.utils';


var { height, width } = Dimensions.get('window');
var SCREEN_HEIGHT = height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

class RestaurantScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isVeg: false
        }
    }

    componentDidMount = () => {
        this.props.GetRestaurantDetailAction();
    }

    renderNavBar = () => (
        <View style={styles.navContainer}>
            <View style={styles.statusBar} />
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.iconLeft} onPress={() => this.props.navigation.goBack()}>
                    <MDI name="arrow-left" size={25} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconRight} onPress={() => this.props.navigation.navigate('SearchFood')}>
                    <MDI name="magnify" size={25} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )

    RestaurantHighlights = () => {
        const { restaurant } = this.props.restaurant;

        return (
            <View style={styles.upperContentWrapper} >
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <MDI name="star" size={25} color={Colors.SecondaryText} />
                        <Text>{restaurant.rating}</Text>
                    </View>
                    <Text>100+Ratings</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <Text>{`${restaurant.min_delivery_time} - ${restaurant.max_delivery_time} mins`}</Text>
                    </View>
                    <Text>Delivery time</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <Text>{DisplayPrice(300)}</Text>
                    </View>
                    <Text>Fot two</Text>
                </View>
            </View>
        )
    }

    VegOnly = () => (
        <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
            <Text>Veg Only</Text>
            <Switch
                value={this.state.isVeg}
                color={Colors.Success}
                onValueChange={() => { this.setState({ isVeg: !this.state.isVeg }); }}
            />
        </View>
    )

    updateCard = (product, quantity) => {
        const newProducer = Object.assign(product, { quantity });
        this.props.UpdateCartAction(newProducer);
    }

    RecommendedSection = () => {
        const { products, menu } = this.props.restaurant.restaurant;
        if (!products && !menu) {
            return null;
        }

        return (
            <View style={{ flexDirection: 'column' }} >
                {
                    menu.map((menuSection) => (
                        <React.Fragment>
                            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, marginTop: 15 }} >
                                <Text style={styles.sectionTitle} >{menuSection.name}</Text>
                            </View>
                            <React.Fragment>
                                {
                                    menuSection.products.map((productId) => (
                                        <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingTop: 3, paddingBottom: 3 }} >
                                            <FoodComponent
                                                product={products[productId]}
                                                onPress={(quantity) => this.updateCard(products[productId], quantity)}
                                            />
                                        </View>
                                    ))
                                }
                            </React.Fragment>
                        </React.Fragment>
                    ))
                }
                {/* <View style={{ flexDirection: 'row', marginBottom: 20 }} >
                    <FoodComponent type="card" />
                    <FoodComponent type="card" />
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 20 }} >
                    <FoodComponent type="card" />
                    <FoodComponent type="card" />
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 20 }} >
                    <FoodComponent type="card" />
                    <FoodComponent type="card" />
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 20 }} >
                    <FoodComponent type="card" />
                    <FoodComponent type="card" />
                </View> */}
            </View>
        )
    }

    RenderContent = () => {
        return (
            <View >
                <this.RestaurantHighlights />
                <this.VegOnly />
                <this.RecommendedSection />
            </View>
        )
    }

    RenderRestaurant = () => {
        const { restaurant } = this.props.restaurant;
        if (!restaurant) {
            return null;
        }

        return (
            <React.Fragment>
                <ReactNativeParallaxHeader
                    headerMinHeight={HEADER_HEIGHT}
                    headerMaxHeight={250}
                    extraScrollHeight={20}
                    useNativeDriver
                    navbarColor={Colors.DarkPrimary}
                    alwaysShowTitle
                    alwaysShowNavBar={false}
                    title={restaurant.name}
                    titleStyle={styles.titleStyle}
                    backgroundImage={{ uri: restaurant.image }}
                    backgroundImageScale={1.2}
                    renderNavBar={this.renderNavBar}
                    containerStyle={{ flex: 1 }}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}
                    innerContainerStyle={{ flex: 1 }}
                    scrollViewProps={{
                        onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
                        onScrollEndDrag: () => console.log('onScrollEndDrag'),
                    }}
                    renderContent={this.RenderContent}
                />
                {/* <FAB
                    label='Menu'
                    color={Colors.Surface}
                    style={styles.fab}
                    icon={() => (
                        <MDI
                            name={'silverware-fork-knife'}
                            size={22}
                            color={Colors.Surface}
                        />
                    )}
                    onPress={() => BottomSheetService.open('MENU')}
                /> */}
                <CartButtonComponent />
            </React.Fragment>
        )
    }

    render() {
        console.log('restaurant', this.props.restaurant);
        return (
            <View style={styles.container} >
                <RestaurantScreenPlaceholder
                    loading={this.props.restaurant.loading}
                    onLoadComponent={this.RenderRestaurant}
                />
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1
    },
    scrollWrap: {
        flex: 1,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 50,
        backgroundColor: Colors.Info
    },
    navContainer: {
        height: HEADER_HEIGHT,
        marginHorizontal: 10,
    },
    statusBar: {
        height: STATUS_BAR_HEIGHT,
        backgroundColor: Colors.transparent,
    },
    navBar: {
        height: NAV_BAR_HEIGHT,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.transparent,
    },
    titleStyle: {
        color: Colors.Surface,
        fontSize: 24,
    },
    upperContentWrapper: {
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    sectionTitle: {
        fontWeight: '500',
        fontSize: 18,
        color: Colors.PrimaryText
    }
};

const mapStateToProps = state => ({
    restaurant: state.restaurant
})

export default connect(mapStateToProps, { GetRestaurantDetailAction, UpdateCartAction })(RestaurantScreen);
