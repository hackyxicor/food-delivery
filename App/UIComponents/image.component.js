import React, { Component } from 'react';
import { Image } from 'react-native';

class UIImage extends Component {
    render() {
        return <Image {...this.props} />
    }
}

export default UIImage;