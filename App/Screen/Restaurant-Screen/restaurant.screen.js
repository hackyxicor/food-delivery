import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { View, ScrollView, TouchableOpacity, Text, Image } from '../../UIComponents';
import { FAB, Portal } from 'react-native-paper';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../Constants/theme.constants';
import BottomSheetService from '../../Services/bottomSheet.service';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { Switch } from 'react-native-paper';


var { height, width } = Dimensions.get('window');
var SCREEN_HEIGHT = height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const images = {
    background: { uri: 'https://file.videopolis.com/D/9dc9f4ba-0b2d-4cbb-979f-fee7be8a4198/8485.11521.brussels.the-hotel-brussels.amenity.restaurant-AD3WAP2L-13000-853x480.jpeg' },
};

class RestaurantScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            isVeg: false
        }
    }

    componentDidMount = () => {

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

    RestaurantHighlights = () => (
        <View style={styles.upperContentWrapper} >
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                    <MDI name="star" size={25} color={Colors.SecondaryText} />
                    <Text>4.2</Text>
                </View>
                <Text>100+Ratings</Text>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                    <Text>25 mins</Text>
                </View>
                <Text>Delivery time</Text>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                    <Text>300</Text>
                </View>
                <Text>Fot two</Text>
            </View>
        </View>
    )

    VegOnly = () => (
        <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
            <Text>VEG ONLY</Text>
            <Switch
                value={this.state.isVeg}
                color={Colors.Success}
                onValueChange={() => { this.setState({ isVeg: !this.state.isVeg }); }}
            />
        </View>
    )

    FoodCard = () => (
        <View style={{ flex: 1, alignItems: 'center', height: 200 }} >
            <Image resizeMode="cover" style={{ width: 180, height: 140 }} source={{ uri: 'https://drop.ndtv.com/albums/COOKS/chinese-vegetarian/rollsspring_640x480.jpg?output-format=webp' }} />
            <View>
                <Text style={{ fontSize: 10, textAlign: 'left' }} >Starter</Text>
                <Text style={{ fontSize: 16, color: Colors.PrimaryText }} >Nachos with cheese</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Text style={{ fontSize: 16 }} >170</Text>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={{ width: 70, height: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: Colors.Success }}
                    >
                        <Text style={{ fontSize: 14, color: Colors.Success }} >Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

    FoodItem = () => (
        <View style={{ flex: 1, alignItems: 'space-between', flexDirection: 'row', height: 50 }} >
            <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }} >
                <Text style={{ fontSize: 16, color: Colors.PrimaryText }} >Nachos with cheese</Text>
                <Text style={{ fontSize: 10, textAlign: 'left' }} >Starter</Text>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: 16 }} >170</Text>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }} >
                <TouchableOpacity
                    onPress={() => { }}
                    style={{ width: 70, height: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: Colors.Success }}
                >
                    <Text style={{ fontSize: 14, color: Colors.Success }} >Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    RecommendedSection = () => (
        <View style={{ flexDirection: 'column' }} >
            <View style={{ flexDirection: 'row', marginBottom: 20 }} >
                <this.FoodCard />
                <this.FoodCard />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 20 }} >
                <this.FoodCard />
                <this.FoodCard />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 20 }} >
                <this.FoodCard />
                <this.FoodCard />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 20 }} >
                <this.FoodCard />
                <this.FoodCard />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20, paddingLeft: 10, paddingRight: 10 }} >
                <this.FoodItem />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20, paddingLeft: 10, paddingRight: 10 }} >
                <this.FoodItem />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20, paddingLeft: 10, paddingRight: 10 }} >
                <this.FoodItem />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20, paddingLeft: 10, paddingRight: 10 }} >
                <this.FoodItem />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20, paddingLeft: 10, paddingRight: 10 }} >
                <this.FoodItem />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20, paddingLeft: 10, paddingRight: 10 }} >
                <this.FoodItem />
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20, paddingLeft: 10, paddingRight: 10 }} >
                <this.FoodItem />
            </View>

        </View>
    )

    RenderContent = () => {
        return (
            <View >
                <this.RestaurantHighlights />
                <this.VegOnly />
                <this.RecommendedSection />
            </View>
        )
    }

    render() {
        const { firstQuery } = this.state;

        return (
            <View style={styles.container} >
                <ReactNativeParallaxHeader
                    headerMinHeight={HEADER_HEIGHT}
                    headerMaxHeight={250}
                    extraScrollHeight={20}
                    navbarColor={Colors.DarkPrimary}
                    title="Lunchbox"
                    titleStyle={styles.titleStyle}
                    backgroundImage={images.background}
                    backgroundImageScale={1.2}
                    renderNavBar={this.renderNavBar}
                    containerStyle={{ flex: 1 }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    innerContainerStyle={{ flex: 1 }}
                    scrollViewProps={{
                        onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
                        onScrollEndDrag: () => console.log('onScrollEndDrag'),
                    }}
                    renderContent={this.RenderContent}
                />
                <FAB
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
                />

                <View style={{ height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 10, position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: Colors.Success }} >
                    <Text style={{ color: Colors.Surface }} >1 Item  |  270</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <MDI
                            name={'cart'}
                            size={22}
                            color={Colors.Surface}
                        />
                        <Text style={{ fontSize: 16, color: Colors.Surface }} >VIEW CART</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = ScaledSheet.create({
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
    }
})

export default RestaurantScreen;
