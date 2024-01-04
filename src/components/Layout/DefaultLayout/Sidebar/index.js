import { useState } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { SlUserFollowing } from "react-icons/sl";
import { MdOutlineHistory } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Genres } from "../../../../mooks/data.js";

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    if (tabName === "Genre") {
      onOpen();
    }
  };

  const isTabSelected = (tabName) => {
    return tabName === selectedTab;
  };

  // const handleGenre = () => {
  //   onOpen();
  // };

  return (
    <Flex
      width="270px"
      paddingTop="30px"
      flexDirection="column"
      overflowY="auto"
      maxHeight="1000px"
    >
      <ChakraLink
        as={ReactRouterLink}
        to="/"
        fontSize="20px"
        fontWeight="bold"
        style={{ textDecoration: "none" }}
        w="240px"
      >
        <Flex
          userSelect="none"
          padding="12px"
          transition="0.3s"
          borderRadius="5px"
          _hover={{
            cursor: "pointer",
            backgroundColor: "rgba(22, 24, 35, 0.03)",
          }}
          _active={{
            backgroundColor: "rgba(22, 24, 35, 0.07)",
          }}
          color={isTabSelected("Home") ? "rgba(254, 44, 85, 1)" : "black"}
          onClick={() => handleTabClick("Home")}
        >
          <AiFillHome
            style={{
              height: "29px",
              width: "29px",
            }}
          />
          <Text paddingLeft="10px" fontSize="20px" as="b" textDecoration="none">
            Trang chủ
          </Text>
        </Flex>
      </ChakraLink>

      {/* Theo Dõi */}
      <ChakraLink
        as={ReactRouterLink}
        to="/following"
        fontSize="20px"
        fontWeight="bold"
        style={{ textDecoration: "none" }}
        w="240px"
      >
        <Flex
          userSelect="none"
          padding="12px"
          transition="0.3s"
          borderRadius="5px"
          _hover={{
            cursor: "pointer",
            backgroundColor: "rgba(22, 24, 35, 0.03)",
          }}
          _active={{
            backgroundColor: "rgba(22, 24, 35, 0.07)",
          }}
          color={isTabSelected("Following") ? "rgba(254, 44, 85, 1)" : "black"}
          onClick={() => handleTabClick("Following")}
        >
          <SlUserFollowing
            style={{
              height: "29px",
              width: "29px",
            }}
          />
          <Text paddingLeft="10px" fontSize="20px" as="b" textDecoration="none">
            Theo dõi
          </Text>
        </Flex>
      </ChakraLink>

      {/* <ChakraLink
        as={ReactRouterLink}
        to="/genre"
        fontSize="20px"
        fontWeight="bold"
        style={{ textDecoration: "none" }}
        w="240px"
      > */}
      <Flex
        userSelect="none"
        padding="12px"
        w="240px"
        transition="0.3s"
        borderRadius="5px"
        _hover={{
          cursor: "pointer",
          backgroundColor: "rgba(22, 24, 35, 0.03)",
        }}
        _active={{
          backgroundColor: "rgba(22, 24, 35, 0.07)",
        }}
        color={isTabSelected("Genre") ? "rgba(254, 44, 85, 1)" : "black"}
        onClick={() => handleTabClick("Genre")}
        // onClick={() => handleGenre()}
      >
        <IoBookOutline
          style={{
            height: "29px",
            width: "29px",
          }}
        />
        <Text paddingLeft="10px" fontSize="20px" as="b">
          Thể loại
        </Text>
      </Flex>
      {/* </ChakraLink> */}

      <Drawer onClose={onClose} isOpen={isOpen} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="#FE2C55" margin="6px 4px" size="20px" />
          <DrawerHeader>
            <Text userSelect="none" paddingLeft="8px" fontSize="25px">
              Các thể loại truyện
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <Flex
              userSelect="none"
              paddingLeft="10px"
              flexWrap="wrap"
              flexDirection="column"
              height="700px"
              rowGap="10px"
              columnGap="30px"
            >
              {Genres.map((genre) => (
                <Flex
                  key={genre.id}
                  height="28px"
                  width="140px"
                  justifyContent="flex-start"
                >
                  <Text
                    fontSize="18px"
                    color={genre.bold ? "#FE2C55" : "black"}
                    as={genre.bold ? "b" : ""}
                    cursor="pointer"
                    transition="0.1s"
                    _hover={{
                      color: "#FE2C55",
                      fontSize: "20px",
                    }}
                  >
                    {genre.genreName}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* ============================================================================== */}
      <ChakraLink
        as={ReactRouterLink}
        to="/history"
        fontSize="20px"
        fontWeight="bold"
        style={{ textDecoration: "none" }}
        w="240px"
      >
        <Flex
          userSelect="none"
          padding="12px"
          w="240px"
          transition="0.3s"
          borderRadius="5px"
          _hover={{
            cursor: "pointer",
            backgroundColor: "rgba(22, 24, 35, 0.03)",
          }}
          _active={{
            backgroundColor: "rgba(22, 24, 35, 0.07)",
          }}
          color={isTabSelected("History") ? "rgba(254, 44, 85, 1)" : "black"}
          onClick={() => handleTabClick("History")}
        >
          <MdOutlineHistory
            style={{
              height: "29px",
              width: "29px",
            }}
          />
          <Text paddingLeft="10px" fontSize="20px" as="b">
            Lịch sử
          </Text>
        </Flex>
      </ChakraLink>

      <ChakraLink
        as={ReactRouterLink}
        to="/profile"
        fontSize="20px"
        fontWeight="bold"
        style={{ textDecoration: "none" }}
        w="240px"
      >
        <Flex
          userSelect="none"
          padding="12px"
          w="240px"
          transition="0.3s"
          borderRadius="5px"
          _hover={{
            cursor: "pointer",
            backgroundColor: "rgba(22, 24, 35, 0.03)",
          }}
          _active={{
            backgroundColor: "rgba(22, 24, 35, 0.07)",
          }}
          color={isTabSelected("Profile") ? "rgba(254, 44, 85, 1)" : "black"}
          onClick={() => handleTabClick("Profile")}
        >
          <IoPersonOutline
            style={{
              height: "29px",
              width: "29px",
            }}
          />
          <Text paddingLeft="10px" fontSize="20px" as="b">
            Hồ sơ
          </Text>
        </Flex>
      </ChakraLink>
    </Flex>
  );
}

export default Sidebar;
