import { VStack } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { Step2Props } from "./types";
import { FormDataStep1, FormDataStep2 } from "../../../types/types";
import { UploadAvatar } from "../../shared/upload-avatar/UploadAvatar";

export const Step2 = ({
  onSubmit,
  setError,
  clearErrors,
  errors,
}: Step2Props) => {
  const { handleSubmit, getValues } = useFormContext<
    FormDataStep1 & FormDataStep2
  >();

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing={4}
      minH="200"
      w="100%"
    >
      <UploadAvatar
        name="avatar"
        label="Choose your avatar"
        required
        defaultValue={getValues("avatar")}
        {...{ setError, clearErrors }}
        errors={errors}
      />
    </VStack>
  );
};
