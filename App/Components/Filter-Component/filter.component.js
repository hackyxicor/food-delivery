import React, { PureComponent } from 'react';
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import { View, TouchableOpacity, Text } from '../../UIComponents';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../Constants/theme.constants';

import filterConfig from '../../Config/filter.config';
import BottomStickButton from '../BottomStickButton/bottomStickButton.component';
import BottomSheetService from '../../Services/bottomSheet.service';


const TAB_BAR_DEFAULT_STYLES = {
    tabBarPosition: 'top',
    prerenderingSiblingsNumber: 0,
    tabBarUnderlineStyle: {
        display: 'none'
    },
    tabBarBackgroundColor: Colors.Surface,
    tabBarActiveTextColor: Colors.DarkPrimary,
    tabBarInactiveTextColor: Colors.SecondaryText,
    tabBarTextStyle: {
        fontSize: 18
    },
    style: {
        borderWidth: 0,
        tabs: {
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 0,
        },
    },
    tabBarUnderlineStyle: {
        backgroundColor: Colors.DarkPrimary,
    },
    backgroundColor: Colors.Surface,
    renderTabBar: () => <ScrollableTabBar />,
};

class FilterComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sort: 1,
        }
    }

    RenderSortFilter = () => {
        const { sort } = this.state;

        return (
            <View style={{ flex: 1 }} >
                {
                    filterConfig.sort.map((item) => (
                        <TouchableOpacity
                            onPress={() => this.setState({ sort: item.id })}
                            style={{ padding: 15, height: 55, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <React.Fragment>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                                    <MDI
                                        name={item.icon}
                                        size={28}
                                        color={Colors.PrimaryText}
                                    />
                                    <Text style={{ marginLeft: 15, fontSize: 16 }} >{item.name}</Text>
                                </View>
                                {
                                    (item.id == sort) ?
                                        <MDI
                                            name='check'
                                            size={28}
                                            color={Colors.Success}
                                        /> : null
                                }
                            </React.Fragment>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <ScrollableTabView
                    {...TAB_BAR_DEFAULT_STYLES}
                >
                    <this.RenderSortFilter tabLabel="Sort" />
                    <View tabLabel="Price" />
                </ScrollableTabView>
                <BottomStickButton
                    onPress={() => BottomSheetService.close('FILTER')}
                >
                    DONE
                </BottomStickButton>
            </View>
        );
    }
}

export default FilterComponent;
