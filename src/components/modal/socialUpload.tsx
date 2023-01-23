import { useContext, useState } from "react";
import { Flex, Input, Select, Text } from "@chakra-ui/react";

import { AppContext } from "context";
import Button from "components/button";
import { isLink } from "utils/validations";

const SocialUpload = () => {
  const { setSocial, setModalType, setSocialCode } = useContext(AppContext);
  const [socialMedia, setVid] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const handleVidChange = (val: string) => {
    setVid(val);
    setCode(` <div className="fb-post" data-href="${val}" data-width="500" data-show-text="true"
  />`);
  };

  const embedDisabled =
    !isLink(socialMedia) || !code?.includes("<") || !code?.includes("/>");
  return (
    <Flex w="full" flexDir="column" gap="15px">
      <Flex
        flexDir="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap="9px"
      >
        <Text fontSize="10px">SOCIAL MEDIA PLATFORM</Text>

        <Select placeholder="Select option" value={"Facebook"}>
          <option value="Facebook">Facebook</option>
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
          value={socialMedia}
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
              setSocial(socialMedia);
              setSocialCode(code);
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

export default SocialUpload;
