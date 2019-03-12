class NotifyService {
    static alert = null;

    static register(ref) {
        this.alert = ref;
    }

    static notify(message) {
        if (this.alert) {
            this.alert.alertWithType('error', 'Error', message);
        }
    }
}

export default NotifyService;
