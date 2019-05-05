import { StackActions, NavigationActions } from 'react-navigation';

export function ResetToScreen(screen, navigation) {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: screen })],
    });
    navigation.dispatch(resetAction);
}