export type ModalType = "Picture" | "Video" | "Social" | null;
export type AppContextState = {
  image: string;
  setImage: (image: string) => void;
  modalType: ModalType;
  setModalType: (modalType: ModalType) => void;
  video: string;
  setVideo: (video: string) => void;
  social: string;
  setSocial: (social: string) => void;
};
