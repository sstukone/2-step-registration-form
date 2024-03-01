import { FormDataStep1, FormDataStep2 } from "../../../types/types";

export type InfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  formData: FormDataStep1 & FormDataStep2;
};
