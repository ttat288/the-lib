import { Flex, Img, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      w="100%"
      height="200px"
      bg="#ccc"
      userSelect="none"
      justifyContent="center"
      alignItems="center"
    >
      <Text as="b" fontSize="70px" color="#FE2C55">
        THELIB
      </Text>
      <Flex marginTop="20px" marginLeft="30px">
        <Text marginRight="10px">Proudly made in </Text>
        <Img
          marginTop="2px"
          w="35px"
          h="20px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/800px-Flag_of_Vietnam.svg.png?20170626140925"
        />
        <Text marginLeft="10px"> by Trần Thẩm Anh Toàn.</Text>
      </Flex>
    </Flex>
  );
}

export default Footer;
