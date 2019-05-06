import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';

import { View, Text } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';
import { DisplayPrice } from '../../Utils/common.utils';

class CartButtonComponent extends PureComponent {
    getCartSum = (cart = []) => {
        let sum = 0;
        let items = 0;
        Object.keys(cart).forEach((cartIndex) => {
            const quantity = cart[cartIndex].quantity;
            sum += (cart[cartIndex].price * quantity);
            items += quantity;
        })

        return { sum, items };
    }

    render() {
        const { cart = [] } = this.props;
        const cartLength = Object.keys(cart).length;
        if (!cartLength) {
            return null;
        }
        
        const { sum, items } = this.getCartSum(cart);

        return (
            <View style={{ height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 10, position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: Colors.Success }} >
                <Text style={{ color: Colors.Surface }} >{items} Item  | {DisplayPrice(sum)}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                    <MDI
                        name={'cart'}
                        size={22}
                        color={Colors.Surface}
                    />
                    <Text style={{ fontSize: 16, color: Colors.Surface }} >VIEW CART</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(CartButtonComponent);
