import { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AppContext } from "context";

import ImageUpload from "./imageUpload";

const ModalComponent = () => {
  const { modalType, setModalType } = useContext(AppContext);
  return (
    <Modal size="2xl" isOpen={!!modalType} onClose={() => setModalType(null)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="black.dark" fontSize="16px" fontWeight="bold" >Embed</ModalHeader>
        <ModalCloseButton />

        <ModalBody pb={6} mt="-10px">
          <ImageUpload />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
