import React, { Component } from 'react';
import { AfterInteractions } from 'react-native-interactions';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Text, Image } from '../../UIComponents';
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
                <Image
                    style={styles.image}
                    source={{ uri: 'https://i.imgur.com/OlC4l4e.jpg' }}
                />
            </AfterInteractions>

        )
    }
}

const styles = ScaledSheet.create({
    image: {
        width: 300,
        height: 300
    }
})

export default HomeScreen;
