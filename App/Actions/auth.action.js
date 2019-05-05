import { GENERATE_OTP, VERIFY_OTP } from "../Constants/action.constants";

export const ActionGenerateOTP = () => ({
    type: GENERATE_OTP
});

export const ActionVerifyOTP = () => ({
    type: VERIFY_OTP
});
