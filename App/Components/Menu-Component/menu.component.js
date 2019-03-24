import React, { PureComponent } from 'react';
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import { View, TouchableOpacity, Text, ScrollView } from '../../UIComponents';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../Constants/theme.constants';
import BottomSheetService from '../../Services/bottomSheet.service';

class MenuComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                { id: 1, name: 'Recommended' },
                { id: 2, name: 'Exsecutive Lunchbox' },
                { id: 3, name: 'Dessert' },
                { id: 4, name: 'Kulcha Lunchbox' },
                { id: 5, name: 'Paratha Lunchbox' },
                { id: 6, name: 'Rice Lunchbox' },
                { id: 7, name: 'Drink' },
            ]
        }
    }

    render() {
        const { menu } = this.state;

        return (
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
            >
                {
                    menu.map((item, key) => (
                        <TouchableOpacity
                            key={key}
                            onPress={() => BottomSheetService.close('MENU')}
                            style={{ width: 380, padding: 15, height: 55, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <React.Fragment>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                                    <Text style={{ marginLeft: 15, fontSize: 16 }} >{item.name}</Text>
                                </View>
                            </React.Fragment>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        );
    }
}

export default MenuComponent;
