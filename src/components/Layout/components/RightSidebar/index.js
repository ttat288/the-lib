import { Flex } from "@chakra-ui/react";

function RightSidebar() {
  return (
    <Flex width="400px" bg="pink">
      <Flex
        width="235px"
        paddingTop="30px"
        flexDirection="column"
        overflowY="auto"
        // maxHeight="100px"
        position="fixed"
      ></Flex>
    </Flex>
  );
}

export default RightSidebar;
