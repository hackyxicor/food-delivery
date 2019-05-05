import React, { Component } from 'react';
import FastImage from 'react-native-fast-image'
import { Stylify } from '../Utils/dimensionHandler.utils';


class UIImage extends Component {
    render() {
        return (
            <FastImage
                resizeMode={FastImage.resizeMode.contain}
                {...this.props}
                style={Stylify(this.props.style)}
            />
        )
    }
}

export default UIImage;

