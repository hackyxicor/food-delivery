import { AsyncStorage } from 'react-native';
import GLOBAL from '../Constants/global.constants';
import { STORE, IS_FIRST_TIME, TOKEN } from '../Constants/async.constans';

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

export function SetToken(token) {
    return new Promise(async (resolve) => {
        try {
            await AsyncStorage.setItem(`${STORE}:${TOKEN}`, String(token));
            GLOBAL.TOKEN = token;
            resolve({ success: true });
        } catch (error) {
            resolve({ success: false });
        }
    })
}

export function GetToken() {
    return new Promise(async (resolve) => {
        try {
            const token = await AsyncStorage.getItem(`${STORE}:${TOKEN}`);
            if (token) {
                GLOBAL.TOKEN = token;
                resolve({ success: true, response: token });
                return;
            }

            resolve({ success: false });
        } catch (error) {
            resolve({ success: false });
        }
    })
}