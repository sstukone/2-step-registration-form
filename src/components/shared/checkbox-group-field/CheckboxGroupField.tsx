import {
  FormControl,
  FormLabel,
  CheckboxGroup,
  VStack,
  Checkbox,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";
import { CheckboxGroupFieldProps } from "./types";

export const CheckboxGroupField = ({
  name,
  label,
  options,
  maxSelection,
  required,
  setError,
  clearErrors,
  errors,
}: CheckboxGroupFieldProps) => {
  const { field } = useController({ name });

  // function to handle checkbox change event
  const handleCheckboxChange = (selectedOptions: string[]) => {
    if (selectedOptions.length > maxSelection) {
      // set error if max selection exceeded
      setError(name, {
        type: "maxSelection",
        message: `Select up to ${maxSelection} options`,
      });
    } else {
      // clear error if within max selection limit
      clearErrors(name);
    }

    // update form field value
    field.onChange(selectedOptions);
  };

  return (
    <FormControl isInvalid={Boolean(errors[name])} isRequired={required}>
      <FormLabel>{label}</FormLabel>
      <CheckboxGroup value={field.value} onChange={handleCheckboxChange}>
        <VStack align="start">
          {options.map((option) => (
            <Checkbox
              colorScheme="teal"
              key={option}
              value={option}
              id={`interest-${option}`}
            >
              {option}
            </Checkbox>
          ))}
        </VStack>
      </CheckboxGroup>
      <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
      <p>{errors[name]?.message}</p>
    </FormControl>
  );
};
