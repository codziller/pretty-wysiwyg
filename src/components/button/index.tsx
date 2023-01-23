import { MouseEvent } from "react";
import {
  Button as ChakraButton,
  Center,
  Spinner,
  Text,
} from "@chakra-ui/react";

type Props = {
  type: any;
  text: string;
  isDisabled: boolean;
  onClick?: (e: MouseEvent) => any;
  isLoading: boolean;
  fullWidth: boolean;
  margin: string;
  isOutline: boolean;
  size: "sm" | "lg";
  bg: string;
  color: string;
  borderColor: string;
  [rest: string]: any;
};
const Button = ({
  type,
  text,
  isDisabled,
  onClick,
  isLoading,
  fullWidth,
  margin,
  isOutline,
  size = "lg",
  bg,
  color,
  borderColor,
  ...rest
}: Partial<Props>) => {
  return (
    <ChakraButton
      type={type ?? "button"}
      onClick={onClick && onClick}
      disabled={isDisabled || isLoading}
      pos="relative"
      width={fullWidth ? "full" : "fit-content"}
      variant="unstyled"
      bg={
        bg || (isOutline ? "none" : isDisabled ? "green.light" : "green.button")
      }
      opacity="1 !important"
      height={size === "sm" ? "30px" : "35px"}
      margin={margin}
      borderColor={borderColor || (isOutline ? "grey.border" : "transparent")}
      borderWidth="1px"
      {...rest}
    >
      <Center
        h="full"
        outline="none"
        borderRadius="4px"
        p="14px"
        transitionDuration="0.5s"
        transitionProperty="all"
        transitionTimingFunction="ease-in-out"
        whiteSpace="nowrap"
        bg={
          bg ||
          (isOutline ? "none" : isDisabled ? "grey.disabled" : "grey.dark")
        }
        _hover={{
          bg: bg || (isOutline ? "grey.light" : "grey.hover"),
          color: isOutline ? "black.text" : "grey.hover",
        }}
        width={fullWidth ? "full" : "fit-content"}
      >
        {isLoading && (
          <Center
            background="none"
            pos="absolute"
            left="0px"
            top="0px"
            h="full"
            w="full"
          >
            <Spinner color="white" />
          </Center>
        )}

        <Text
          fontSize={size === "sm" ? "10px" : "14px"}
          color={color || (isOutline ? "black.text" : "white")}
          _hover={{
            color: isOutline ? "black.text" : "grey.hover",
          }}
          opacity={isLoading ? "0" : "1"}
        >
          {text}
        </Text>
      </Center>
    </ChakraButton>
  );
};

export default Button;
