import React, { Component } from 'react';
import FastImage from 'react-native-fast-image'


class UIImage extends Component {
    render() {
        return (
            <FastImage
                resizeMode={FastImage.resizeMode.contain}
                {...this.props}
            />
        )
    }
}

export default UIImage;