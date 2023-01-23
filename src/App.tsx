import {
  ChakraProvider,
  Box,
  Container,
  InputElementProps,
  Flex,
} from "@chakra-ui/react";
import { Editor } from "@tinymce/tinymce-react";
import ContextButton from "./components/contextButton";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Editor as TinyMCEEditor } from "tinymce";
import theme from "theme";
export const App = () => {
  const [editorValue, setEditorValue] = useState("");
  const [currentNode, setCurrentNode] = useState<any>(null);
  const [showContext, setShowContext] = useState<boolean>(true);
  const [, setPicture] = useState<string>("");
  const editorRef = useRef<any>(null);

  const handleEditorChange = (content: string, editor: TinyMCEEditor) => {
    setEditorValue(content);
    // setCurrentNode(editor?.selection?.getSel());

    // setCurrentNode(editorRef?.current?.selection?.getBoundingClientRect());
  };

  const handleImagePlacement = (e: any) => {
    setPicture(URL.createObjectURL(e as any));
    editorRef.current.insertContent(`<img src="${URL.createObjectURL(e)}" />`);
  };

  return (
    <ChakraProvider theme={theme}>
      <Container textAlign="center" fontSize="xl" minH="100vh" p={3}>
        <Flex
          pos="absolute"
          style={{
            left: currentNode?.left - 80 || 0,
            top: currentNode?.top - 80 || 0,
          }}
          id="toolbarElm"
          transitionDuration="0.5s"
          transitionProperty="all"
          transitionTimingFunction="ease-in-out"
          zIndex={9}
        ></Flex>
        <Flex
          pos="absolute"
          style={{
            left: currentNode?.left - 5 || 0,
            top: currentNode?.top + 20 || 0,
          }}
          w="277px"
          h="217px"
          transitionProperty="all"
          transitionTimingFunction="ease-in-out"
          transitionDuration="0.5s"
          zIndex={showContext ? 9 : -1}
          opacity={showContext ? 1 : 0}
        >
          <ContextButton
            isDisplayed={showContext}
            onClick={() => editorRef.current?.focus()}
          />
        </Flex>

        <textarea id="texteditor" />
        <input
          style={{ width: "100px", padding: "20px", color: "red" }}
          placeholder="Choose picture"
          type="file"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleImagePlacement(e?.target?.files && e?.target?.files[0]);
          }}
        />
        {/* <Flex h="600px" w="full" bg="pink"> */}
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
        {/* </Flex> */}
      </Container>
    </ChakraProvider>
  );
};
