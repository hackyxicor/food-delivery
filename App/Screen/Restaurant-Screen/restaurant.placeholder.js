import React from 'react';
import Placeholder, { Line } from "rn-placeholder";

import { View } from '../../UIComponents';

const RestaurantScreenPlaceholder = ({ loading, onLoadComponent }) => (
    <Placeholder
        isReady={!loading}
        animation="fade"
        whenReadyRender={onLoadComponent}
    >
        <View style={{ alignItems: 'center', flex: 1 }} >
            <Line style={{ width: '100%', height: 250, paddingBottom: 10 }} />
            <View style={{ flexDirection: 'row', height: 45, marginBottom: 10, padding: 10 }} >
                <View style={{ flex: 1, padding: 5 }} >
                    <Line style={{ width: '100%', height: 45 }} />
                </View>
                <View style={{ flex: 1, padding: 5 }} >
                    <Line style={{ width: '100%', height: 45 }} />
                </View>
                <View style={{ flex: 1, padding: 5 }} >
                    <Line style={{ width: '100%', height: 45 }} />
                </View>
            </View>
            <Line style={{ width: '25%', height: 30, marginLeft: 20, marginTop: 25, marginBottom: 25 }} />
            <View style={{ flexDirection: 'row', height: 150, paddingLeft: 10, paddingRight: 10 }} >
                <View style={{ flex: 1, padding: 5 }} >
                    <Line style={{ width: '100%', height: 150 }} />
                </View>
                <View style={{ flex: 1, padding: 5 }} >
                    <Line style={{ width: '100%', height: 150 }} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', height: 150, paddingLeft: 10, paddingRight: 10 }} >
                <View style={{ flex: 1, padding: 5 }} >
                    <Line style={{ width: '100%', height: 150 }} />
                </View>
                <View style={{ flex: 1, padding: 5 }} >
                    <Line style={{ width: '100%', height: 150 }} />
                </View>
            </View>
        </View>
    </Placeholder>
)

export default RestaurantScreenPlaceholder;