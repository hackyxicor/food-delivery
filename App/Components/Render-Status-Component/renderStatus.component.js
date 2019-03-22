import React, { PureComponent } from 'react';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';

import { Colors } from '../../Constants/theme.constants';


class RenderStatus extends PureComponent {
    render() {
        const { status } = this.props;
        
        let icon = 'check-decagram';
        let color = Colors.Success;

        if (status == 'warning') {
            icon = 'alert-decagram';
            color = Colors.Warning;
        }

        return (
            <MDI
                name={icon}
                size={25}
                color={color}
            />
        )
    }
}

export default RenderStatus;
