import { DefaultTheme } from 'react-native-paper';

module.exports = {
    Colors: {
        DarkPrimary: '#D32F2F',
        Primary: '#F44336',
        LightPrimary: '#FFCDD2',
        Text: '#FFFFFF',
        Icon: '#FFFFFF',
        Accent: '#FFC107',
        Inactive: '#BDBDBD',
        PrimaryText: '#212121',
        SecondaryText: '#757575',
        Devider: '#BDBDBD',
        Surface: '#FFFFFF',
        OnPrimary: '#FFFFFF',
    },
    Theme: {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: '#D32F2F',
            accent: '#FFC107',
        }
    }
}