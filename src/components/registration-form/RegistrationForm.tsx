import {
  Heading,
  Divider,
  Text,
  Button,
  VStack,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { RegistrationFormProps } from "./types";
import {
  registrationSchemaStep1,
  registrationSchemaStep2,
} from "../../schemas/schemas";
import { FormDataStep1, FormDataStep2 } from "../../types/types";
import { InfoModal } from "../shared/info-modal/InfoModal";

export const RegistrationForm = ({
  formData,
  setFormData,
}: RegistrationFormProps) => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const methods = useForm<FormDataStep1 | FormDataStep2>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: zodResolver(
      step === 1 ? registrationSchemaStep1 : registrationSchemaStep2
    ),
    defaultValues: formData,
  });

  const {
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
    trigger,
  } = methods;

  // submit handler for Step 1
  const onSubmitStep1: SubmitHandler<FormDataStep1 | FormDataStep2> = (
    data
  ) => {
    // update formdata
    setFormData({ ...formData, ...data });
    // proceed to next step
    setStep(2);
  };

  // submit handler for Step 1
  const onSubmitStep2: SubmitHandler<FormDataStep1 | FormDataStep2> = (
    data
  ) => {
    // update formdata
    setFormData({ ...formData, ...data });
  };

  // function to submit Step 2 and open confirmation modal
  const submitStep2AndConfirm = () => {
    // submit Step 2 data
    handleSubmit(onSubmitStep2)();
    // open confirmation modal
    setIsModalOpened(true);
  };

  const handleNextSubmit = async () => {
    // trigger form validation
    const isStepValid = await trigger();
    if (isStepValid) {
      if (step === 1) {
        setStep(2);
        handleSubmit(onSubmitStep1)();
      } else {
        submitStep2AndConfirm();
      }
    }
  };

  // submit form data
  const submitData = () => {
    setIsModalOpened(false);
    // simulate promise to send formData to backend
    const data = new Promise((resolve, reject) => {
      setTimeout(() => resolve(200), 1000);
    });

    toast.promise(data, {
      success: {
        title: "Successful registration!",
        // reset form and return to step 1
        onCloseComplete: () => {
          reset();
          setStep(1);
        },
      },
      loading: { title: "Please wait!", description: "Loading ..." },
      error: { title: "Oooops ...", description: "Something went wrong!" },
    });
  };

  return (
    <FormProvider {...methods}>
      <VStack
        padding="4"
        bg="white"
        maxW="md"
        minW={["xs", "md"]}
        rounded="md"
        boxShadow="lg"
        justifyContent="space-between"
      >
        <Heading as="h4" size="md">
          Registration step{" "}
          <Text as="i" color="teal">
            {step}
          </Text>
        </Heading>
        <Divider marginBottom="4" />
        {step === 1 ? (
          <Step1
            onSubmit={handleSubmit(onSubmitStep1)}
            setError={setError}
            clearErrors={clearErrors}
            errors={errors}
          />
        ) : (
          <Step2
            onSubmit={handleSubmit(onSubmitStep2)}
            setError={setError}
            clearErrors={clearErrors}
            errors={errors}
          />
        )}

        <HStack justifyContent="space-between" w="100%">
          {step !== 1 && (
            <Button colorScheme="teal" onClick={() => setStep(1)}>
              Previous
            </Button>
          )}
          <Button
            colorScheme="teal"
            onClick={handleNextSubmit}
            marginLeft="auto"
          >
            {step === 1 ? "Next" : "Submit"}
          </Button>
        </HStack>
      </VStack>
      <InfoModal
        isOpen={isModalOpened}
        onClose={() => setIsModalOpened(false)}
        onConfirm={submitData}
        {...{ formData }}
      />
    </FormProvider>
  );
};
