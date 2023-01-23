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
};

export const AppContext = createContext<AppContextState>(contextDefaultValues);
const AppContextProvider = ({ children }: Props) => {
  const [image, setImage] = useState(contextDefaultValues.image);
  const [modalType, setModalType] = useState(contextDefaultValues.modalType);
  return (
    <AppContext.Provider
      value={{
        image,
        setImage,
        modalType,
        setModalType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
