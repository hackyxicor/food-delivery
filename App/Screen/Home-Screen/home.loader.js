import React from 'react';
import {
    PlaceholderContainer,
    Placeholder
} from 'react-native-loading-placeholder';
import LinearGradient from 'react-native-linear-gradient';

import { View } from '../../UIComponents';

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

const HomeScreenPlaceholder = () => {
    return (
        <PlaceholderContainer
            style={styles.placeholderContainer}
            animatedComponent={<Gradient />}
            duration={1000}
            delay={1000}
        >
            <Placeholder style={[styles.placeholder, { width: '90%', height: 150 }]} />
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
                <View
                    style={{
                        flexDirection: 'column',
                        width: '100%',
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
            <Placeholder
                style={[styles.placeholder, { marginTop: 20, width: '80%' }]}
            />

            <Placeholder style={[styles.placeholder, { width: '90%' }]} />
            <Placeholder style={[styles.placeholder, { width: '50%' }]} />

            <Placeholder style={[styles.placeholder, { width: '90%', height: 150 }]} />
            <Placeholder style={[styles.placeholder, { width: '90%', height: 150 }]} />
        </PlaceholderContainer>
    );
};

export default HomeScreenPlaceholder;

const styles = {
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
};