import { useContext, useState } from "react";
import { Flex, Input, Select, Text } from "@chakra-ui/react";

import { AppContext } from "context";
import Button from "components/button";
import { isLink } from "utils/validations";
const VideoUpload = () => {
  const { setVideo, setModalType } = useContext(AppContext);
  const [vid, setVid] = useState<string>("");

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

        <Input value={vid} onChange={(e) => setVid(e.target.value)} />
      </Flex>
      <Flex w="full" justifyContent="flex-start" alignItems="center" gap="10px">
        <Button
          text="Embed"
          onClick={() => {
            if (isLink(vid)) {
              setVideo(vid);
              setModalType(null);
            }
          }}
          isDisabled={!isLink(vid)}
        />
        <Button text="Cancel" onClick={() => setModalType(null)} isOutline />
      </Flex>
    </Flex>
  );
};

export default VideoUpload;
