import React, { Component } from 'react';
import { View, Text } from '../../UIComponents';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import { Colors } from '../../Constants/theme.constants';
import RenderStatus from '../../Components/Render-Status-Component/renderStatus.component';

import AccountScreenOptionsConfig from '../../Config/account.config';
import MenuItem from '../../Components/Menu-Item-Component/menuItem.component';

const AnimatedRenderStatus = Animatable.createAnimatableComponent(RenderStatus);

class AcctountScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    RenderUserDetailsSection = () => (
        <View
            style={styles.userSectionWrap}
        >
            <View style={{ flexDirection: 'row', padding: 1, justifyContent: 'flex-start', alignItems: 'center' }} >
                <Text style={styles.textBig} >HIMANSHU KUSHWAH</Text>
            </View>
            <View style={{ flexDirection: 'column', paddingTop: 5, justifyContent: 'center', alignItems: 'flex-start' }} >
                <View style={styles.row} >
                    <Text style={styles.secondaryText} >9731702355</Text>
                    <AnimatedRenderStatus
                        animation="bounceIn"
                        status="success"
                    />
                </View>
                <View style={styles.row} >
                    <Text style={styles.secondaryText} >hkxicor@gmail.com</Text>
                    <AnimatedRenderStatus
                        animation="bounceIn"
                        status="warning"
                    />
                </View>
            </View>
        </View>
    )

    render() {
        const navigation = this.props.navigation;

        return (
            <View style={styles.container} >
                <this.RenderUserDetailsSection />
                {
                    AccountScreenOptionsConfig.map((menuItemConfig, key) => {
                        return (
                            <MenuItem
                                key={key}
                                menuItemConfig={menuItemConfig}
                                navigation={navigation}
                            />
                        )
                    })
                }
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
    },
    userSectionWrap: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 30
    },
    textBig: {
        fontSize: 24,
        fontWeight: '500',
        color: Colors.PrimaryText
    },
    secondaryText: {
        fontSize: 16,
        fontWeight: '300',
        color: Colors.SecondaryText,
        marginRight: 10
    },
    row: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
};

export default AcctountScreen;