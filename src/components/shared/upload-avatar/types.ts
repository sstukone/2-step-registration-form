import {
  FieldErrors,
  UseFormClearErrors,
  UseFormSetError,
} from "react-hook-form";
import { FormDataStep1, FormDataStep2 } from "../../../types/types";

export type UploadAvatarProps = {
  name: keyof FormDataStep1 | keyof FormDataStep2;
  label: string;
  required?: boolean;
  setError: UseFormSetError<FormDataStep1 | FormDataStep2>;
  clearErrors: UseFormClearErrors<FormDataStep1 | FormDataStep2>;
  errors: FieldErrors<FormDataStep1 & FormDataStep2>;
  defaultValue?: File;
};
