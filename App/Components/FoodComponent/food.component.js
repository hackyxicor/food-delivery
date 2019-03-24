import React, { PureComponent } from 'react';

import { View, Text, Image, TouchableOpacity } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';
import AddToCartComponent from '../Add-To-Cart-Component/addToCart.component';

class FoodComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    FoodCard = () => (
        <View style={{ flex: 1, height: 180 }} >
            <View style={{ flex: 3, alignItems: 'center' }} >
                <Image resizeMode="cover" style={{ width: 140, height: 100 }} source={{ uri: 'https://drop.ndtv.com/albums/COOKS/chinese-vegetarian/rollsspring_640x480.jpg?output-format=webp' }} />
            </View>
            <View style={{ flex: 1.5, padding: 10 }} >
                <Text style={{ fontSize: 10, textAlign: 'left' }} >Starter</Text>
                <Text style={{ fontSize: 16, color: Colors.PrimaryText }} >Nachos with cheese</Text>
                <View style={{ height: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Text style={{ fontSize: 16 }} >170</Text>

                    <AddToCartComponent />
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
                <AddToCartComponent />
            </View>
        </View>
    )

    render() {
        const { type } = this.props;

        if (type == 'card') {
            return <this.FoodCard />;
        }

        return <this.FoodItem />;
    }
}

export default FoodComponent;
