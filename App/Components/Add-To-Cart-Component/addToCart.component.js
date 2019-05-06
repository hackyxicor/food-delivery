import React, { PureComponent } from 'react';
import { Colors } from '../../Constants/theme.constants';
import { TouchableOpacity, Text } from '../../UIComponents';
import { View } from 'react-native-animatable';

class AddToCartComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    add = () => {
        this.setState({ count: this.state.count + 1 }, () => this.props.onPress(this.state.count))
    }

    remove = () => {
        this.setState({ count: this.state.count - 1 }, () => this.props.onPress(this.state.count))
    }

    RenderCounter = () => {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }} >
                <TouchableOpacity
                    onPress={this.remove}
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                    <Text>-</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                    <Text>{this.state.count}</Text>
                </View>
                <TouchableOpacity
                    onPress={this.add}
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                >
                    <Text>+</Text>
                </TouchableOpacity>
            </View >
        )
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    if (this.state.count == 0) {
                        this.add();
                    }
                }}
                style={{ width: 70, height: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: Colors.Success }}
            >
                {
                    this.state.count == 0 ?
                        <Text style={{ fontSize: 14, color: Colors.Success }} >Add</Text>
                        :
                        <this.RenderCounter />
                }
            </TouchableOpacity>
        )
    }
}

export default AddToCartComponent;
