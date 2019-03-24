import React, { PureComponent } from 'react';
import { ScrollableTabView, ScrollableTabBar } from '@valdio/react-native-scrollable-tabview'
import { View, TouchableOpacity, Text, ScrollView } from '../../UIComponents';
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
            foodType: 1,
            cuisine: [],
        }
    }

    RenderSortFilter = () => {
        const { sort } = this.state;

        return (
            <View style={{ flex: 1 }} >
                {
                    filterConfig.sort.map((item, key) => (
                        <TouchableOpacity
                            key={key}
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

    RenderFoodType = () => {
        const { foodType } = this.state;

        return (
            <View style={{ flex: 1 }} >
                {
                    filterConfig.foodType.map((item, key) => (
                        <TouchableOpacity
                            key={key}
                            onPress={() => this.setState({ foodType: item.id })}
                            style={{ padding: 15, height: 55, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <React.Fragment>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                                    <Text style={{ marginLeft: 15, fontSize: 16 }} >{item.name}</Text>
                                </View>
                                {
                                    (item.id == foodType) ?
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

    RenderCuisineType = () => {
        const { cuisine } = this.state;

        return (
            <ScrollView style={{ flex: 1 }} >
                {
                    filterConfig.cuisine.map((item, key) => (
                        <TouchableOpacity
                            key={key}
                            onPress={() => this.setState({ cuisine: cuisine.push(item.id) })}
                            style={{ padding: 15, height: 55, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                        >
                            <React.Fragment>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} >
                                    <Text style={{ marginLeft: 15, fontSize: 16 }} >{item.name}</Text>
                                </View>
                                {
                                    (cuisine.indexOf(item.id) != -1) ?
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
            </ScrollView>
        )
    }



    render() {
        return (
            <View style={{ flex: 1 }} >
                <ScrollableTabView
                    {...TAB_BAR_DEFAULT_STYLES}
                >
                    <this.RenderSortFilter tabLabel="Sort" />
                    <this.RenderFoodType tabLabel="Price" />
                    <this.RenderCuisineType tabLabel="Cuisine" />
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
