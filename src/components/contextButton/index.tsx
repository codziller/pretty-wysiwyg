import { useCallback, CSSProperties, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import ContextMenu from "components/contextMenu";

type Props = {
  isDisplayed: boolean;
  style?: CSSProperties;
  onClick: any;
};
const ContextButton = ({ isDisplayed, style, onClick }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Flex
      onClick={onClick}
      w="fit-content"
      h="fit-content"
      pos="relative"
      flexDir="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      style={style && style}
      gap="5px"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
     
    >
      <Button
        w="32px"
        h="32px"
        minW="32px"
        minH="32px"
        maxW="32px"
        maxH="32px"
        rounded="full"
        bg="green.light"
        _hover={{ bg: "green.hover-light" }}
        transitionProperty="all"
        transitionTimingFunction="ease-in-out"
        transitionDuration="0.5s"
        zIndex={isDisplayed ? 9 : -1}
        opacity={isDisplayed ? 1 : 0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p="0"
      >
        <AiOutlinePlus color="#212121" fill="#212121" size={"16px"} />
      </Button>
      {showMenu && <ContextMenu showMenu={showMenu} />}
    </Flex>
  );
};

export default ContextButton;
