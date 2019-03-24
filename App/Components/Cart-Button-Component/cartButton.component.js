import React, { PureComponent } from 'react';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';

import { View, Text } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';

class CartButtonComponent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        )
    }
}

export default CartButtonComponent;
