import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { AfterInteractions } from 'react-native-interactions';

import { View, Text } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';

import HomeScreenPlaceholder from './home.placeholder';

import {
    PlaceholderContainer,
    Placeholder
} from 'react-native-loading-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import NotifyService from '../../Services/notify.service';

const Gradient = () => {
    return (
        <LinearGradient
            colors={['#eeeeee', '#dddddd', '#eeeeee']}
            start={{ x: .5, y: 1.0 }}
            end={{ x: 0.0, y: 0.0 }}
            style={{
                flex: 1,
                width: 120
            }}
        />
    );
};

const PlaceholderExample = () => {
    return (
        <PlaceholderContainer
            style={styles.placeholderContainer}
            animatedComponent={<Gradient />}
            duration={1000}
            delay={1000}
        >
            <View style={{ flexDirection: 'row' }}>
                <Placeholder style={[styles.placeholder, { width: 50, height: 50 }]} />
                <View
                    style={{
                        flexDirection: 'column',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Placeholder
                        style={[
                            styles.placeholder,
                            {
                                width: '50%',
                                height: 10
                            }
                        ]}
                    />
                    <Placeholder
                        style={[
                            styles.placeholder,
                            {
                                width: '35%',
                                height: 7
                            }
                        ]}
                    />
                </View>
            </View>

            <Placeholder
                style={[styles.placeholder, { marginTop: 20, width: '80%' }]}
            />
            <Placeholder style={[styles.placeholder, { width: '90%' }]} />
            <Placeholder style={[styles.placeholder, { width: '50%' }]} />
        </PlaceholderContainer>
    );
};


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        setTimeout(() => {
            NotifyService.notify('hiiii');
        }, 1000);
    }

    render() {
        return (
            <AfterInteractions
                placeholder={<HomeScreenPlaceholder />}
            >
                <PlaceholderExample loader={this.loadingComponent1} />
            </AfterInteractions>

        )
    }
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 25,
    },
    placeholderContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    placeholder: {
        height: 8,
        marginTop: 6,
        marginLeft: 15,
        alignSelf: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'
    },
    row: {
        flexDirection: 'row',
        width: '100%'
    }
});

export default HomeScreen;
