import React from 'react';
import Placeholder, { Line } from "rn-placeholder";

import { View } from '../../UIComponents';

const GenericListingPlaceholder = ({ loading, onLoadComponent }) => (
    <Placeholder
        isReady={!loading}
        animation="fade"
        whenReadyRender={onLoadComponent}
    >
        <View style={{ alignItems: 'center', flex: 1 }} >
            <Line style={{ width: '100%', height: 100, paddingBottom: 10 }} />
            <Line style={{ width: '100%', height: 100, paddingBottom: 10 }} />
            <Line style={{ width: '100%', height: 100, paddingBottom: 10 }} />
            <Line style={{ width: '100%', height: 100, paddingBottom: 10 }} />
        </View>
    </Placeholder>
)

export default GenericListingPlaceholder;