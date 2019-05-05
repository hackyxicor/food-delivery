import React from 'react';
import Placeholder, { Line } from "rn-placeholder";

const OffersHorizontalSliderPlaceholder = ({ loading, onLoadComponent }) => (
    <Placeholder
        isReady={!loading}
        animation="fade"
        whenReadyRender={onLoadComponent}
    >
        <Line style={{ width: '100%', height: 170 }} />
    </Placeholder>
)

export default OffersHorizontalSliderPlaceholder;