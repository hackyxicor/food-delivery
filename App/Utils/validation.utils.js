import Validator from 'validator';
import NotifyService from '../Services/notify.service';

export function IsMobilePhone(mobile, message = 'Input error') {
    const valid = Validator.isMobilePhone(mobile, ['en-IN'])

    if (!valid) {
        NotifyService.notify({
            title: '',
            message,
            type: 'warn',
            duration: 1000
        })
    }

    return valid;
}

export function IsOTP(otp, message = 'Input error') {
    const valid = Validator.isNumeric(otp) && Validator.isLength(otp, { min: 4, max: 4 });

    if (!valid) {
        NotifyService.notify({
            title: '',
            message,
            type: 'warn',
            duration: 1000
        })
    }

    return valid;
}

export function IsEmail(email, message = 'Input error') {
    const valid = Validator.isEmail(email);

    if (!valid) {
        NotifyService.notify({
            title: '',
            message,
            type: 'warn',
            duration: 1000
        })
    }

    return valid;
}

export function IsName(name, message = 'Input error') {
    const valid = Validator.isAlpha(name) && Validator.isLength(name, { min: 3, max: 18 });

    if (!valid) {
        NotifyService.notify({
            title: '',
            message,
            type: 'warn',
            duration: 1000
        })
    }

    return valid;
}