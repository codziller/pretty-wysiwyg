import { ReactNode } from "react";
import { useState, createContext } from "react";

import { AppContextState } from "types";

type Props = {
  children: ReactNode;
};
const contextDefaultValues: AppContextState = {
  image: "",
  setImage: () => {},
  modalType: null,
  setModalType: () => {},
  video: "",
  setVideo: () => {},
  social: "",
  setSocial: () => {},
  videoCode: "",
  setVideoCode: () => {},
  socialCode: "",
  setSocialCode: () => {},
};

export const AppContext = createContext<AppContextState>(contextDefaultValues);
const AppContextProvider = ({ children }: Props) => {
  const [image, setImage] = useState(contextDefaultValues.image);
  const [video, setVideo] = useState(contextDefaultValues.image);
  const [social, setSocial] = useState(contextDefaultValues.image);
  const [videoCode, setVideoCode] = useState(contextDefaultValues.image);
  const [socialCode, setSocialCode] = useState(contextDefaultValues.image);
  const [modalType, setModalType] = useState(contextDefaultValues.modalType);
  return (
    <AppContext.Provider
      value={{
        image,
        setImage,
        modalType,
        setModalType,
        video,
        setVideo,
        videoCode,
        setVideoCode,
        socialCode,
        setSocialCode,
        social,
        setSocial,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
