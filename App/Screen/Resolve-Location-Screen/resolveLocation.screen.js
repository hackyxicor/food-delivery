import React, { Component } from 'react';
import { BackHandler, AppState } from 'react-native';
import {
    StackActions,
    NavigationActions
} from 'react-navigation';
import LottieView from 'lottie-react-native';
import { connect } from 'react-redux';
import LocationService from '../../Services/location.service';
import { View, Text } from '../../UIComponents';
import { Colors } from '../../Constants/theme.constants';
import BottomStickButton from '../../Components/BottomStickButton/bottomStickButton.component';
import { SetLatLngAction } from '../../Actions/index.action';
import { resetToScreen } from '../../Services/navigation.service';

class ResolveLocaitonScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appState: AppState.currentState,
            resolving: true,
            serviceStatus: -1,
            layout: null
        }
        this.locationService = new LocationService();
    }

    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.resolveLocation();
        this.animation.play();
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    _handleAppStateChange = (nextAppState) => {
        if (
            this.state.appState.match(/inactive|background/) &&
            nextAppState === 'active'
        ) {
            setTimeout(() => {
                this.resolveLocation();
            }, 2000);
        }
        this.state.appState = nextAppState;
    };

    handleBackPress = () => true;

    resolveLocation = async () => {
        const result = await this.locationService.resolveLocationServiceState();

        if (result == 4) {
            const geolocation = await this.locationService.getCurrentLocation();
            if (geolocation.success) {
                const { latitude, longitude } = geolocation.location;
                this.props.SetLatLngAction(latitude, longitude);
                resetToScreen('Tabs');
            }
            return;
        }

        this.setState({
            resolving: false,
            serviceStatus: result,
            layout: this.locationService.getActionFromStatusCode(result)
        });
    }


    render() {
        const { resolving, layout } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.lottieContainer} >
                    <LottieView
                        style={styles.lottieView}
                        ref={animation => {
                            this.animation = animation;
                        }}
                        source={require('../../Assets/Lottie/location-pin.json')}
                    />
                </View>
                {
                    resolving ?
                        <View
                            style={styles.padding}
                        >
                            <Text
                                style={styles.messageText}
                            >
                                Getting your location
                            </Text>
                        </View> : null
                }
                {
                    layout ?
                        <React.Fragment>
                            <View style={{ marginTop: 20, textAlign: 'center' }} >
                                <Text style={styles.title} >{layout.title}</Text>
                            </View>
                            <View style={{ marginTop: 30, textAlign: 'center' }} >
                                <Text style={styles.message} >{layout.description}</Text>
                            </View>
                            <BottomStickButton
                                onPress={() => this.geolocation[layout.action]()}
                            >
                                {layout.actionName}
                            </BottomStickButton>
                        </React.Fragment> : null
                }
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lottieView: {
    },
    lottieContainer: {
        width: 200,
        height: 200
    },
    messageText: {
        fontSize: 24,
        color: Colors.PrimaryText
    },
    padding: {
        marginTop: 100,
    },
    title: {
        fontSize: 26,
        color: Colors.PrimaryText
    },
    message: {
        fontSize: 18,
        color: Colors.SecondaryText,
        textAlign: 'center'
    }
};

export default connect(null, { SetLatLngAction })(ResolveLocaitonScreen);
