import { useContext, useState } from "react";
import { Flex, Input, Select, Text } from "@chakra-ui/react";

import { AppContext } from "context";
import Button from "components/button";
import { isLink } from "utils/validations";

const VideoUpload = () => {
  const { setVideo, setModalType, setVideoCode } = useContext(AppContext);
  const [vid, setVid] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const handleVidChange = (val: string) => {
    setVid(val);
    setCode(`<video width="640" height="480" 
    src="${val}" 
    controls/>`);
  };

  const embedDisabled =
    !isLink(vid) || !code?.includes("<") || !code?.includes("/>");
  return (
    <Flex w="full" flexDir="column" gap="15px">
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap="9px"
      >
        <Text fontSize="10px">VIDEO PROVIDER</Text>

        <Select placeholder="Select option" value={"Youtube"}>
          <option value="Youtube">Youtube</option>
        </Select>
      </Flex>
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap="9px"
      >
        <Text fontSize="10px">URL</Text>

        <Input
          value={vid}
          onChange={(e) => {
            handleVidChange(e.target.value);
          }}
        />
      </Flex>

      <Flex
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap="9px"
      >
        <Text fontSize="10px">CODE</Text>

        <Input value={code} onChange={(e) => setCode(e.target.value)} />
      </Flex>

      <Flex w="full" justifyContent="flex-start" alignItems="center" gap="10px">
        <Button
          text="Embed"
          onClick={() => {
            if (!embedDisabled) {
              setVideo(vid);
              setVideoCode(code);
              setModalType(null);
            }
          }}
          isDisabled={embedDisabled}
        />
        <Button text="Cancel" onClick={() => setModalType(null)} isOutline />
      </Flex>
    </Flex>
  );
};

export default VideoUpload;
