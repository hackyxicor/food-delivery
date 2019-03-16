import { AsyncStorage } from 'react-native';

import { STORE, IS_FIRST_TIME } from '../Constants/async.constans';

export function IsFirstTimeAppUser() {
    return new Promise(async (resolve) => {
        try {
            const value = await AsyncStorage.getItem(`${STORE}:${IS_FIRST_TIME}`);
            if (value !== null) {
                resolve({ success: false });
                return;
            }
            SetAsNotFirstTime();
            resolve({ success: true });
            return;
        } catch (error) {
            SetAsNotFirstTime();
            resolve({ success: true });
            return;
        }
    })
}

function SetAsNotFirstTime() {
    AsyncStorage.setItem(`${STORE}:${IS_FIRST_TIME}`, 'USED');
}