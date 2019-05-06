import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableRipple } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';

import { View, Text } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';
import { DisplayPrice } from '../../Utils/common.utils';

const AnimatedTouchableRipple = Animatable.createAnimatableComponent(TouchableRipple);

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
            <AnimatedTouchableRipple
                onPress={() => { }}
                animation="fadeInUpBig"
                rippleColor="rgba(0, 0, 0, .32)"
                style={{ height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 10, position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: Colors.Success }}
            >
                <React.Fragment>
                    <Text style={{ color: Colors.Surface }} >{items} Item  | {DisplayPrice(sum)}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                        <MDI
                            name={'cart'}
                            size={22}
                            color={Colors.Surface}
                        />
                        <Text style={{ fontSize: 16, color: Colors.Surface }} >VIEW CART</Text>
                    </View>
                </React.Fragment>
            </AnimatedTouchableRipple>
        )
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(CartButtonComponent);
