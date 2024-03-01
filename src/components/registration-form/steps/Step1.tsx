import { VStack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { Step1Props } from "./types";
import { FormDataStep1 } from "../../../types/types";
import { CheckboxGroupField } from "../../shared/checkbox-group-field/CheckboxGroupField";
import { InputComponent } from "../../shared/input-component/InputComponent";

export const Step1 = ({
  onSubmit,
  setError,
  clearErrors,
  errors,
}: Step1Props) => {
  const { handleSubmit } = useFormContext<FormDataStep1>();

  return (
    <VStack as="form" onSubmit={handleSubmit(onSubmit)} spacing={2} w="100%">
      <InputComponent
        name="firstName"
        label="First Name"
        required
        setError={setError}
        clearErrors={clearErrors}
        errors={errors}
      />
      <InputComponent
        name="lastName"
        label="Last Name"
        required
        setError={setError}
        clearErrors={clearErrors}
        errors={errors}
      />
      <InputComponent
        name="password"
        type="password"
        label="Password"
        required
        setError={setError}
        clearErrors={clearErrors}
        errors={errors}
      />
      <InputComponent
        name="passwordConfirmation"
        type="password"
        label="Confirm Password"
        required
        setError={setError}
        clearErrors={clearErrors}
        errors={errors}
      />
      <CheckboxGroupField
        name="interests"
        label="Interests"
        options={["Sports", "Music", "Dancing", "Games"]}
        maxSelection={2}
        required
        setError={setError}
        clearErrors={clearErrors}
        errors={errors}
      />
    </VStack>
  );
};
