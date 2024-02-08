import { useState } from "react";
import {
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
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTab, setSelectedTab] = useState("Home");
  const [hamburger, setHamburger] = useState(true);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
    if (tabName === "Genre") {
      onOpen();
    }
  };

  const isTabSelected = (tabName) => {
    return tabName === selectedTab;
  };

  const handleSidebar = () => {
    setHamburger(!hamburger);
  };

  // const handleGenre = () => {
  //   onOpen();
  // };

  return (
    <Flex
      marginTop="15%"
      width={hamburger ? "200px" : "50px"}
      flexDirection="column"
      overflowX="hidden"
      overflowY="hidden"
      position="sticky"
      top="78px"
      height="324px"
      boxShadow="rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"
      borderRadius="0px 15px 15px 0px"
      transition="0.4s"
    >
      <Flex padding="17px">
        {hamburger ? (
          <Flex onClick={handleSidebar}>
            <IoClose
              style={{
                userSelect: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            />
          </Flex>
        ) : (
          <Flex onClick={handleSidebar}>
            <GiHamburgerMenu
              style={{
                userSelect: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            />
          </Flex>
        )}
      </Flex>
      <ChakraLink
        as={ReactRouterLink}
        to="/home"
        fontSize="20px"
        fontWeight="bold"
        style={{ textDecoration: "none" }}
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
          whiteSpace="nowrap"
        >
          <AiFillHome
            style={{
              mineHight: "30px",
              minWidth: "30px",
              height: "30px",
            }}
          />
          {hamburger ? (
            <Text
              paddingLeft="10px"
              fontSize="20px"
              as="b"
              textDecoration="none"
            >
              Trang chủ
            </Text>
          ) : (
            ""
          )}
        </Flex>
      </ChakraLink>

      {/* Theo Dõi */}
      <ChakraLink
        as={ReactRouterLink}
        to="/following"
        fontSize="20px"
        fontWeight="bold"
        style={{ textDecoration: "none" }}
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
          whiteSpace="nowrap"
        >
          <SlUserFollowing
            style={{
              mineHight: "30px",
              minWidth: "30px",
              height: "30px",
            }}
          />
          {hamburger ? (
            <Text
              paddingLeft="10px"
              fontSize="20px"
              as="b"
              textDecoration="none"
            >
              Theo dõi
            </Text>
          ) : (
            ""
          )}
        </Flex>
      </ChakraLink>

      {/* <ChakraLink
        as={ReactRouterLink}
        to="/genre"
        fontSize="20px"
        fontWeight="bold"
        style={{ textDecoration: "none" }}
        
      > */}
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
        color={isTabSelected("Genre") ? "rgba(254, 44, 85, 1)" : "black"}
        onClick={() => handleTabClick("Genre")}
        // onClick={() => handleGenre()}
        whiteSpace="nowrap"
      >
        <IoBookOutline
          style={{
            minHeight: "30px",
            minWidth: "30px",
            height: "30px",
          }}
        />
        {hamburger ? (
          <Text paddingLeft="10px" fontSize="20px" as="b">
            Thể loại
          </Text>
        ) : (
          ""
        )}
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
          color={isTabSelected("History") ? "rgba(254, 44, 85, 1)" : "black"}
          onClick={() => handleTabClick("History")}
          whiteSpace="nowrap"
        >
          <MdOutlineHistory
            style={{
              mineHight: "30px",
              minWidth: "30px",
              height: "30px",
            }}
          />
          {hamburger ? (
            <Text paddingLeft="10px" fontSize="20px" as="b">
              Lịch sử
            </Text>
          ) : (
            ""
          )}
        </Flex>
      </ChakraLink>

      <ChakraLink
        as={ReactRouterLink}
        to="/profile"
        fontSize="20px"
        fontWeight="bold"
        style={{ textDecoration: "none" }}
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
          color={isTabSelected("Profile") ? "rgba(254, 44, 85, 1)" : "black"}
          onClick={() => handleTabClick("Profile")}
          whiteSpace="nowrap"
        >
          <IoPersonOutline
            style={{
              mineHight: "30px",
              minWidth: "30px",
              height: "30px",
            }}
          />
          {hamburger ? (
            <Text paddingLeft="10px" fontSize="20px" as="b">
              Hồ sơ
            </Text>
          ) : (
            ""
          )}
        </Flex>
      </ChakraLink>
    </Flex>
  );
}

export default Sidebar;
