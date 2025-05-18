import { toast } from "sonner";
import { TOAST_STYLE } from "@/constants";

export const errorToast = (message: string) => {
  return toast.error(message, {
    style: TOAST_STYLE.error,
  });
};

export const successToast = (message: string) => {
  return toast.success(message, {
    style: TOAST_STYLE.success,
  });
};

export const warningToast = (message: string) => {
  return toast.warning(message, {
    style: TOAST_STYLE.warning,
  });
};

export const infoToast = (message: string) => {
  return toast.info(message, {
    style: TOAST_STYLE.info,
  });
};
