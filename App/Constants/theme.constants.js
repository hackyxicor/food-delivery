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
        Devider: '#BfBfBf',
        Surface: '#FFFFFF',
        OnPrimary: '#FFFFFF',
        DarkBackground: '#f2f2f2',
        Success: '#4BB543',
        Warning: '#FFCC00',
        Error: '#CC3300',
        Info: '#3498DB'
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