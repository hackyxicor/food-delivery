import React, { Component } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import { resetToScreen } from '../../Services/navigation.service.js';

class OnBoardingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        this.animation1.play();
    }

    onSwipe = (index) => {
        if (index == 1) {
            setTimeout(() => {
                this.animation2.play()
            }, 100);
        }

        if (index == 2) {
            setTimeout(() => {
                this.animation3.play()
            }, 100);
        }
    }

    done = () => {
        resetToScreen('Login');
    }

    render() {
        return (
            <Onboarding
                pageIndexCallback={this.onSwipe}
                pages={[
                    {
                        backgroundColor: '#fff',
                        title: 'Order',
                        subtitle: 'Oder all you want from your favorite stores',
                        image: (
                            <View style={{ width: 200, height: 200 }} >
                                <LottieView
                                    ref={animation => {
                                        this.animation1 = animation;
                                    }}
                                    source={require('../../Assets/Lottie/food.json')}
                                />
                            </View>
                        )
                    },
                    {
                        backgroundColor: '#fff',
                        title: 'Pick Delivery Time',
                        subtitle: 'Receive your order in less than 1 hour.\n Or pick a specific delivery time',
                        image: (
                            <View style={{ width: 200, height: 200 }} >
                                <LottieView
                                    ref={animation => {
                                        this.animation2 = animation;
                                    }}
                                    source={require('../../Assets/Lottie/clock.json')}
                                />
                            </View>
                        )
                    },
                    {
                        backgroundColor: '#fff',
                        title: 'Get Your Order',
                        subtitle: 'Real-time tracking will keep you posted about order progress.',
                        image: (
                            <View style={{ width: 200, height: 200 }} >
                                <LottieView
                                    ref={animation => {
                                        this.animation3 = animation;
                                    }}
                                    source={require('../../Assets/Lottie/delivery.json')}
                                />
                            </View>
                        )
                    }
                ]}
                onSkip={() => this.done()}
                onDone={() => this.done()}
            />
        )
    }
}

export default OnBoardingScreen;
