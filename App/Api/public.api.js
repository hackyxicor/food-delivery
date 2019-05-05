import { Get } from "../Services/http.service";
import { SEND_OTP, VERIFY_OTP } from "../Constants/api.constants";

class PublicApi {
    static GetOTP = (mobile) => {
        return Get({ url: SEND_OTP })
    }

    static VerifyOTP = (mobile, otp) => {
        return Get({ url: VERIFY_OTP })
    }
}

export default PublicApi;
