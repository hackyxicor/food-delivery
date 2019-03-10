import React, { Component } from 'react';
import { FlatList } from 'react-native';

class UIFlatList extends Component {
    render() {
        return <FlatList {...this.props} />
    }
}

export default UIFlatList;