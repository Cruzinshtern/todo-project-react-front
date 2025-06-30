import toast from "react-hot-toast";

const defaultDuration = 3000;

const ToastService = {
    success(message: string, duration: number  = defaultDuration): void {
        toast.success(message, { duration });
    },

    error(message: string, duration: number  = defaultDuration): void {
        toast.error(message, { duration });
    }
}

export default ToastService;