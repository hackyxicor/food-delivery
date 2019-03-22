import React, { Component } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, FlatList } from '../../UIComponents';
import { FAB, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Colors } from '../../Constants/theme.constants';

class SavedAddressesScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedAddresses: [
                {
                    id: 1,
                    title: 'Home',
                    subtitle: '5th Floor hideout',
                    address: 'House no. #35, 3rd C Cross, 24th Main, BTM 2nd Stage'
                },
                {
                    id: 2,
                    title: 'Work',
                    subtitle: 'Drivezy HQ',
                    address: 'House no. #35, 3rd C Cross, 24th Main, BTM 2nd Stage, Bengaluru'
                }
            ]
        }
    }

    RenderSavedItemCard = ({ item }) => {
        return (
            <Card style={styles.cardWrap} >
                <Card.Title
                    title={item.title}
                    subtitle={item.subtitle}
                />
                <Card.Content>
                    <Paragraph>{item.address}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button>Edit</Button>
                    <Button>Remove</Button>
                </Card.Actions>
            </Card>
        )
    }

    render() {
        const { savedAddresses } = this.state;

        return (
            <View
                style={styles.container}
            >
                <FlatList
                    style={{ flex: 1 }}
                    data={savedAddresses}
                    renderItem={this.RenderSavedItemCard}
                    keyExtractor={(item) => String(item.id)}
                />
                <FAB
                    style={styles.fab}
                    icon="add"
                    onPress={() => console.log('Pressed')}
                />
            </View>
        );
    }
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DarkBackground
    },
    cardWrap: {
        paddingTop: 10,
        marginTop: 5,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default SavedAddressesScreen;

