import React from 'react';
import Placeholder, { Line } from "rn-placeholder";

const DeliveryAddressPlaceholder = ({ loading, onLoadComponent }) => (
    <Placeholder
        isReady={!loading}
        animation="fade"
        whenReadyRender={onLoadComponent}
    >
        <Line style={{ width: '100%', height: 20 }} />
    </Placeholder>
)

export default DeliveryAddressPlaceholder;