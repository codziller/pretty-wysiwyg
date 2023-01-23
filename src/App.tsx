import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Input,
  Progress,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Editor } from "@tinymce/tinymce-react";
import ContextButton from "./components/contextButton";
import { useContext, useEffect, useRef, useState } from "react";
import { Editor as TinyMCEEditor } from "tinymce";
import theme from "theme";

import { AppContext } from "context";
import ModalComponent from "components/modal";
import Button from "components/button";

export const App = () => {
  const { image, videoCode, socialCode } = useContext(AppContext);

  const [editorValue, setEditorValue] = useState(``);
  const [editorRawValue, setEditorRawValue] = useState("");
  const [currentNode, setCurrentNode] = useState<any>(null);
  const [showContext, setShowContext] = useState<boolean>(false);

  const editorRef = useRef<any>(null);

  const handleEditorChange = (content: string, editor: TinyMCEEditor) => {
    setEditorValue(content);
    setEditorRawValue(editor.getContent({ format: "text" }));
  };
  useEffect(() => {
    image && editorRef?.current?.insertContent(`<img src="${image}" />`);
  }, [image]);

  useEffect(() => {
    videoCode && editorRef?.current?.insertContent(videoCode);
  }, [videoCode]);

  useEffect(() => {
    socialCode && editorRef?.current?.insertContent(socialCode);
  }, [socialCode]);

  const getWOrdCount = (): number => {
    const wordCountByNewLine = editorRawValue
      ? editorRawValue?.split("\n")?.filter((word) => word).length
      : 0;
    const wordCountBySpace = editorRawValue
      ? editorRawValue?.split(" ")?.filter((word) => word).length
      : 0;

    const wordCountTotal = wordCountByNewLine + wordCountBySpace - 1;
    return wordCountTotal < 0 ? 0 : wordCountTotal;
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex flexDir="column" h="full" w="500px" mx="auto">
        <Box
          textAlign="center"
          fontSize="xl"
          h="fit"
          rounded="4px"
          border="1px solid #E7F1E9"
          p="0px"
          mx="auto"
          mt="60px"
          w="full"
        >
          <Box w="full" h="45px" borderBottom="1px solid #E7F1E9" />
          <Flex flexDir="column" w="full">
            <Flex
              pos="absolute"
              style={{
                left: currentNode?.left - 80 || 0,
                top: currentNode?.top - 60 || 0,
              }}
              id="toolbarElm"
              transitionDuration="0.5s"
              transitionProperty="all"
              transitionTimingFunction="ease-in-out"
              zIndex={9}
            />
            <Flex
              pos="absolute"
              style={{
                left: currentNode?.left - 5 || 0,
                top: currentNode?.top + 30 || 0,
              }}
              w="fit-content"
              h="fit-content"
              transitionProperty="all"
              transitionTimingFunction="ease-in-out"
              transitionDuration="0.5s"
              zIndex={!editorValue && !showContext ? -1 : 9}
              opacity={!editorValue && !showContext ? 0 : 1}
            >
              <ContextButton
                isDisplayed={showContext}
                onClick={() => editorRef.current?.focus()}
              />
            </Flex>

            <Input
              color="black.text"
              fontSize="24px"
              fontWeight="bold"
              rounded="4px"
              variant="unstyled"
              placeholder="Add post title"
              bg="grey.light"
              px="20px"
              py="5px"
            />

            <Box w="full" h="500px" maxH="500px">
              {!editorRef?.current && <Progress size="xs" isIndeterminate />}
              <Editor
                apiKey="k38jheq2w9x3q528dofel83l074ogu6p959bg6vad4l6iily"
                value={editorValue}
                onInit={(evt, editor: any) => (editorRef.current = editor)}
                onEditorChange={handleEditorChange}
                init={{
                  placeholder: "Add content",
                  inline: true,
                  fixed_toolbar_container: "#toolbarElm",
                  menubar: false,
                }}
                onNodeChange={(e) => {
                  setCurrentNode(
                    editorRef?.current?.selection?.getBoundingClientRect()
                  );
                }}
                onFocusIn={() => setShowContext(true)}
                onBlur={() => setShowContext(false)}
              />
            </Box>
          </Flex>

          <Flex
            justifyContent="flex-end"
            alignItems="center"
            w="full"
            h="27px"
            borderTop="1px solid #E7F1E9"
          >
            <Text fontSize="10px" color="black.text" pr="16px">
              {getWOrdCount()}/1000 word
            </Text>
          </Flex>

          <ModalComponent />
        </Box>
        <Flex w="full" justifyContent="flex-end" mt="20px">
          <Button text="Post" />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};
