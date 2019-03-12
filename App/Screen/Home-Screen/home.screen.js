import React, { Component } from 'react';
import { AfterInteractions } from 'react-native-interactions';

import { View, Text } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';

import HomeScreenPlaceholder from './home.placeholder';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <AfterInteractions
                placeholder={<HomeScreenPlaceholder />}
            >
                <HomeScreenPlaceholder />
            </AfterInteractions>

        )
    }
}

export default HomeScreen;
