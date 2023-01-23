import { ReactElement, useContext } from "react";
import { AiFillPicture } from "react-icons/ai";
import { TiVideo } from "react-icons/ti";
import { TiSocialFlickr } from "react-icons/ti";

import { Box, Button, Flex, SlideFade, Text } from "@chakra-ui/react";
import { AppContext } from "context";
import { ModalType } from "types";

type Props = { showMenu: boolean };
type MenuItem = { title: ModalType; label: string; icon: ReactElement };
const ContextMenu = ({ showMenu }: Props) => {
  const { setModalType } = useContext(AppContext);
  const menuItems: MenuItem[] = [
    {
      title: "Picture",
      label: "Jpeg, png",
      icon: <AiFillPicture color="#343E37" />,
    },
    {
      title: "Video",
      label: "JW player, Youtube, Vimeo",
      icon: <TiVideo color="#343E37" />,
    },
    {
      title: "Social",
      label: "Instagram, Twitter, TikTok, Snapchat, Facebook",
      icon: <TiSocialFlickr color="#343E37" />,
    },
  ];
  return (
    <Box
      bg="white"
      w="277px"
      boxShadow="0px 1px 4px #00000014"
      zIndex={showMenu ? 9 : -1}
      py="10px"
    >
      <SlideFade
        in={showMenu}
        offsetY="-5px"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Flex
          flexDir="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          gap="5px"
          w="full"
        >
          <Text fontSize="10px" color="black.light" pl="15px" pb="10px">
            EMBEDS
          </Text>
          {menuItems.map(({ title, label, icon }) => (
            <Button
              key={title}
              w="full"
              py="10px"
              bg="green.fade"
              _hover={{ bg: "#F7FCF8" }}
              transitionProperty="all"
              transitionTimingFunction="ease-in-out"
              transitionDuration="0.5s"
              display="flex"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap="10px"
              onClick={() => setModalType(title)}
              rounded="none"
            >
              <Box mt="-3.5px"> {icon}</Box>
              <Flex
                w="full"
                gap="5px"
                flexDir="column"
                alignItems="flex-start"
                justifyContent="center"
                height="full"
              >
                <Text fontSize="12px" color="black.light">
                  {title}
                </Text>
                <Text fontSize="8px" color="black.light">
                  {label}
                </Text>
              </Flex>
            </Button>
          ))}
        </Flex>
      </SlideFade>
    </Box>
  );
};

export default ContextMenu;
