import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from '../../UIComponents';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../Constants/theme.constants';
import { Searchbar } from 'react-native-paper';

class SelectDeliveryLocationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstQuery: '',
            savedAddresses: [
                {
                    id: 1,
                    label: 'HOME',
                    address: '40A, 5th floor, 3rd C Cross, Road, 24th Main, BTM 2nd Stage'
                },
                {
                    id: 1,
                    label: 'HOME',
                    address: '40A, 5th floor, 3rd C Cross, Road, 24th Main, BTM 2nd Stage'
                },
                {
                    id: 1,
                    label: 'HOME',
                    address: '40A, 5th floor, 3rd C Cross, Road, 24th Main, BTM 2nd Stage'
                }
            ]
        }
    }

    componentDidMount = () => {

    }

    close = () => {
        this.props.navigation.pop();
    }

    render() {
        const { firstQuery } = this.state;

        return (
            <View style={styles.container} >
                <View style={{ paddingLeft: 15, paddingRight: 15 }} >
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity
                            onPress={this.close}
                        >
                            <MDI name='close' size={25} color={Colors.SecondaryText} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 100 }} >
                        <View style={{ height: 40, justifyContent: 'center' }} >
                            <Text style={{ fontSize: 16, color: Colors.PrimaryText }} >Search for delivery location</Text>
                        </View>
                        <Searchbar
                            style={{ height: 60, borderRadius: 30, elevation: 0, borderWidth: 1, borderColor: Colors.Devider }}
                            placeholder="Enter location"
                            onChangeText={query => { this.setState({ firstQuery: query }); }}
                            value={firstQuery}
                        />
                    </View>
                    <View style={{ height: 40, justifyContent: 'center' }} >
                        <Text style={{ fontSize: 16, color: Colors.PrimaryText }} >Saved addresses</Text>
                    </View>
                </View>
                <View>
                    {
                        this.state.savedAddresses.map((item) => (
                            <TouchableOpacity
                                onPress={() => { }}
                            >
                                <View style={{ height: 40, paddingTop: 5, paddingBottom: 5, marginBottom: 5, marginTop: 5, flexDirection: 'row' }} >
                                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                                        <MDI name='home' size={25} color={Colors.SecondaryText} />
                                    </View>
                                    <View style={{ flex: 8, alignItems: 'flex-start', justifyContent: 'center' }} >
                                        <Text style={{ fontSize: 16, color: Colors.PrimaryText }} >{item.label}</Text>
                                        <Text style={{ fontSize: 11, color: Colors.SecondaryText }} >{item.address}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
    },
    headerWrapper: {
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
};

export default SelectDeliveryLocationScreen;
