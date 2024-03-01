import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { InfoModalProps } from "./types";

export const InfoModal = ({
  isOpen,
  onClose,
  formData,
  onConfirm,
}: InfoModalProps) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>Please double check your data!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            First name: <Text as="b">{formData?.firstName}</Text>
          </Text>
          <Text>
            Last name: <Text as="b">{formData?.lastName}</Text>
          </Text>
          <Text>
            Interests: <Text as="b">{formData?.interests?.join(", ")}</Text>
          </Text>
          <Text>
            Avatar: <Text as="b">{formData?.avatar?.name}</Text>
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={onConfirm}>
            OK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
