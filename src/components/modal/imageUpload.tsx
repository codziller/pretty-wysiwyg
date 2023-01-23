import { ChangeEvent, useContext, useRef, useState } from "react";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

import { AppContext } from "context";
import Button from "components/button";
const ImageUpload = () => {
  const { setImage, setModalType } = useContext(AppContext);
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [picture, setPicture] = useState<string>("");

  const handleInputChange = () => {
    inputFileRef?.current?.click();
  };
  return (
    <Flex w="full" flexDir="column" gap="15px">
      <Text fontSize="14px" color="black.text" fontWeight={600}>
        Upload Image
      </Text>
      <input
        ref={inputFileRef}
        style={{ display: "none" }}
        type="file"
        accept=".png,.jpg,.webp"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setPicture(
            e?.target?.files
              ? String(URL.createObjectURL(e?.target?.files[0]))
              : ""
          );
        }}
      />
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap="9px"
      >
        <Text fontSize="10px">FILE UPLOAD</Text>

        <Center
          bgSize="cover"
          bgRepeat="no-repeat"
          bgImage={`url(${picture})`}
          bgColor="grey.light"
          w="full"
          h="140px"
          borderWidth="1px"
          borderStyle="dashed"
          borderColor="green.button"
          rounded={"4px"}
          cursor="pointer"
          onClick={handleInputChange}
        >
          <Box
            w="full"
            h="full"
            bgColor="rgba(0, 0, 0, 0.448)"
            zIndex="2"
            opacity={picture ? 1 : 0}
            transitionDuration="0.5s"
            transitionProperty="all"
            transitionTimingFunction="ease-in-out"
          />
          <Button
            text={picture ? "Replace Image" : "Import Image from Device"}
            pos="absolute"
            zIndex={4}
            borderColor="green.border"
            size="sm"
            isOutline
            color={picture ? "white" : "black"}
          />
        </Center>
      </Flex>
      <Flex w="full" justifyContent="flex-start" alignItems="center" gap="10px">
        <Button
          text="Embed"
          onClick={() => {
            if (picture) {
              setImage(picture);
              setModalType(null);
            }
          }}
          isDisabled={!picture}
        />
        <Button text="Cancel" onClick={() => setModalType(null)} isOutline />
      </Flex>
    </Flex>
  );
};

export default ImageUpload;
