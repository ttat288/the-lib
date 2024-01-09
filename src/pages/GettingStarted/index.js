import { Button, Flex, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { Link as ReactRouterLink } from "react-router-dom";
import swal from "sweetalert";

function GettingStarted() {
  swal({
    title: "Thông báo !",
    text: "Trang web vẫn đang trong quá trình phát triển! :)",
    dangerMode: true,
  });

  return (
    <Flex
      width="100%"
      height="100vh"
      bg="#1A202C"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Flex flexDirection="column" width="80%">
        <Typewriter
          options={{
            strings: [
              '<span style="font-size: 100px;color:#fff;">Chào mừng bạn đến với</span>',
              '<span style="font-size: 100px;color:#fff;">Bạn có thể đọc truyện tại</span>',
              '<span style="font-size: 100px;color:#fff;">Miễn phí! :)</span>',
            ],
            autoStart: true,
            loop: true,
            cursor: '<span style="font-size: 100px;color:#FE2C55;">_</span>',
            delay: 40,
          }}
        />
        <Text fontSize="130px" as="b" color="#FE2C55">
          TheLib
        </Text>
      </Flex>
      <Button
        as={ReactRouterLink}
        to="/home"
        height="70px"
        width="200px"
        bg="#FE2C55"
        position="relative"
        overflow="hidden"
        marginTop="150px"
        _hover={{
          backgroundColor: "#ef2950",
          boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.3)",
        }}
        _active={{
          backgroundColor: "#e0274b",
          transform: "translateY(2px)",
          boxShadow: "0px 0px 5px rgba(255, 255, 255, 0.3)",
        }}
      >
        <Text fontSize="25px" color="#fff">
          Getting started
        </Text>
      </Button>
    </Flex>
  );
}

export default GettingStarted;
