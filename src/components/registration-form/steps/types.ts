import {
  FieldErrors,
  UseFormClearErrors,
  UseFormSetError,
} from "react-hook-form";
import { FormDataStep1, FormDataStep2 } from "../../../types/types";

export type Step1Props = {
  onSubmit: () => void;
  setError: UseFormSetError<FormDataStep1 | FormDataStep2>;
  clearErrors: UseFormClearErrors<FormDataStep1 | FormDataStep2>;
  errors: FieldErrors<FormDataStep1 & FormDataStep2>;
};

export type Step2Props = {
  onSubmit: () => void;
  setError: UseFormSetError<FormDataStep1 | FormDataStep2>;
  clearErrors: UseFormClearErrors<FormDataStep1 | FormDataStep2>;
  errors: FieldErrors<FormDataStep1 & FormDataStep2>;
};
