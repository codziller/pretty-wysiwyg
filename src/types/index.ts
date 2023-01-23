export type ModalType = "Picture" | "Video" | "Social" | null;
export type AppContextState = {
  image: string;
  setImage: (image: string) => void;
  modalType: ModalType;
  setModalType: (modalType: ModalType) => void;
};
