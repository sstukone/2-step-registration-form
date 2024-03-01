import { Dispatch, SetStateAction } from "react";
import { FormDataStep1, FormDataStep2 } from "../../types/types";

export type RegistrationFormProps = {
  formData: FormDataStep1 & FormDataStep2;
  setFormData: Dispatch<SetStateAction<FormDataStep1 & FormDataStep2>>;
};
