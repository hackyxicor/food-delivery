class BottomSheetService {
    static bottomSheet = {};

    static register(key, ref) {
        this.bottomSheet[key] = ref;
    }

    static open(key) {
        setTimeout(() => {
            requestAnimationFrame(() => {
                if (this.bottomSheet[key]) {
                    this.bottomSheet[key].open();
                }
            });
        }, 400);
    }

    static close(key) {
        setTimeout(() => {
            requestAnimationFrame(() => {
                if (this.bottomSheet[key]) {
                    this.bottomSheet[key].close();
                }
            });
        }, 100);
    }
}

export default BottomSheetService;
