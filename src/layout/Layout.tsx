import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { FormDataStep1, FormDataStep2 } from "../types/types";
import { RegistrationForm } from "../components/registration-form/RegistrationForm";

export const Layout = () => {
  // manage form data
  const [formData, setFormData] = useState<FormDataStep1 & FormDataStep2>({
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirmation: "",
    interests: [],
    avatar: undefined,
  });

  return (
    <Container
      maxW="100%"
      minH="100vh"
      bg="bodyBg"
      centerContent
      justifyContent="center"
    >
      <RegistrationForm {...{ formData, setFormData }} />
    </Container>
  );
};
