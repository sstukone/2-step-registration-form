import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";
import { useRef, useState } from "react";
import { UploadAvatarProps } from "./types";

export const UploadAvatar = ({
  name,
  label,
  required,
  setError,
  clearErrors,
  errors,
  defaultValue,
}: UploadAvatarProps) => {
  const { field, fieldState } = useController({ name });
  // state to visualize uploaded image
  const [image, setImage] = useState<string | undefined>(
    defaultValue && URL.createObjectURL(defaultValue)
  );
  const inputFileRef = useRef<HTMLInputElement>(null);

  // function to handle file change event
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) {
      // set error if no file is selected
      setError(name, {
        type: "required",
        message: "Avatar is required",
      });
      // clear image if no file is selected
      setImage(undefined);
    } else {
      // clear error if file is selected
      clearErrors(name);
      // set image preview
      setImage(URL.createObjectURL(file));
    }

    // update form field value
    field.onChange(file);
  };

  return (
    <FormControl isInvalid={fieldState.invalid} isRequired={required}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <HStack justifyContent="center" mb="4">
        <Avatar
          src={image}
          size="2xl"
          onClick={() => inputFileRef?.current?.click()}
          cursor="pointer"
          _hover={{
            background: errors[name]?.message ? "red.500" : "teal.500",
          }}
          showBorder
          bg={errors[name]?.message ? "red.300" : "teal"}
          borderColor={errors[name]?.message ? "red.400" : "teal"}
        />
      </HStack>
      <Input
        type="file"
        onChange={handleFileChange}
        isRequired={required}
        accept="image/png, image/jpeg"
        hidden
        ref={inputFileRef}
      />
      <FormErrorMessage textAlign="center">
        {errors[name]?.message}
      </FormErrorMessage>
    </FormControl>
  );
};
