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
import { MODAL_VIEWS } from "utils/constants";
import ImageUpload from "./imageUpload";
import VideoUpload from "./videoUpload";
import SocialUpload from "./socialUpload";

const ModalComponent = () => {
  const { PICTURE, VIDEO, SOCIAL } = MODAL_VIEWS;
  const { modalType, setModalType } = useContext(AppContext);
  return (
    <Modal size="2xl" isOpen={!!modalType} onClose={() => setModalType(null)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="black.dark" fontSize="16px" fontWeight="bold">
          Embed
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody pb={6} mt="-10px">
          {modalType === PICTURE ? (
            <ImageUpload />
          ) : modalType === VIDEO ? (
            <VideoUpload />
          ) : modalType === SOCIAL ? (
            <SocialUpload />
          ) : null}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
