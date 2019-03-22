import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, ScrollView } from '../../UIComponents';
import { Searchbar } from 'react-native-paper';

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstQuery: ''
        }
    }

    componentDidMount = () => {

    }

    render() {
        const { firstQuery } = this.state;

        return (
            <View style={styles.container} >
                <View style={styles.headerWrapper} >
                    <Searchbar
                        style={{ height: 60, borderRadius: 0 }}
                        placeholder="Search for any restaurant or dish"
                        onChangeText={query => { this.setState({ firstQuery: query }); }}
                        value={firstQuery}
                    />
                </View>
                <ScrollView
                    style={styles.scrollWrapper}
                >

                </ScrollView>
            </View>
        )
    }
}

const styles = ScaledSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        height: 70,
    },
})

export default SearchScreen;
