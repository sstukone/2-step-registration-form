import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";
import { InputComponentProps } from "./types";

export const InputComponent = ({
  name,
  label,
  type = "text",
  required,
  errors,
}: InputComponentProps) => {
  const { field, fieldState } = useController({ name });

  return (
    <FormControl isInvalid={fieldState.invalid} isRequired={required}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        type={type}
        {...field}
        id={name}
        isRequired={required}
        autoComplete="off"
      />
      <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
    </FormControl>
  );
};
