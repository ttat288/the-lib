import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { AiOutlineLoading } from "react-icons/ai";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Image,
  Box,
  Popover,
  Portal,
  PopoverContent,
  PopoverBody,
  PopoverTrigger,
  Text,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogCloseButton,
  AlertDialogBody,
  useDisclosure,
  Stack,
  Avatar,
  AvatarBadge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { searchResult } from "../../../../mooks/data.js";

import { gapi } from "gapi-script";
import LoginButton from "../../../../components/services/google/login.js";
import LogoutButton from "../../../../components/services/google/logout.js";
const clientId =
  "325518792405-623nupdf9l0phl5r63rpli0eboekr9hn.apps.googleusercontent.com";

const cx = classNames.bind(styles);

function Header() {
  const [isLogin, setIsLogin] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const [isInputFocused, setIsInputFocused] = useState(false);
  const handleFocus = () => {
    setIsInputFocused(true);
  };
  const handleBlur = () => {
    setIsInputFocused(false);
  };

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleLoginSuccess = () => {
    setIsLogin(true);
    onClose();
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <Flex
      zIndex="2"
      w="100%"
      height="60px"
      justifyContent="center"
      boxShadow="0px 1px 1px rgb(0 0 0 /12%)"
      position="fixed"
      top={0}
      backgroundColor="#FDFDFD"
    >
      <Flex
        w="100vw"
        h="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image paddingLeft="15px" src={images.logo} alt="TheLib" />

        <Popover autoFocus={false} isOpen={isInputFocused} placement="bottom">
          {/* PopoverTrigger: when you click it will be shown */}
          <PopoverTrigger>
            <InputGroup height="46px" width="361px">
              <Input
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputChange}
                fontSize="1.6rem"
                placeholder="Search comic"
                bgColor="rgba(22,24,35,0.06)"
                borderRadius="92px"
                spellCheck={false}
                padding="12px 96px 12px 16px"
                variant="unstyled"
                border="1.5px solid rgba(22,24,35,0.06)"
                _focusWithin={{
                  caretColor: "rgb(254, 44, 85)",
                  border: "1.5px solid rgba(22,24,35,0.2)",
                }}
              />

              <InputRightElement height="100%" width="60px">
                <IoMdCloseCircleOutline className={cx("close")} />
                <AiOutlineLoading className={cx("loading")} />

                <Box width="2px" height="30px" bg="rgba(22,24,35,0.1)" />
                <Button
                  height="100%"
                  width="100px"
                  borderRadius="0px 92px 92px 0px"
                  backgroundColor="rgba(22,24,35,0)"
                  _hover={{
                    backgroundColor: "rgba(22,24,35,0.03)",
                  }}
                  _active={{
                    backgroundColor: "rgba(22,24,35,0.06)",
                  }}
                >
                  <LuSearch
                    // className={cx("search-btn")}
                    style={{
                      height: "100%",
                      width: "25px",
                      transition: "0.4s",
                    }}
                    color={
                      inputValue.trim() === ""
                        ? "rgba(22, 24, 35, 0.2)"
                        : "rgba(22, 24, 35, 0.75)"
                    }
                  />
                </Button>
              </InputRightElement>
            </InputGroup>
          </PopoverTrigger>

          <Portal>
            <PopoverContent w="349px" overflow="hidden">
              <PopoverBody w="361px" maxH="330px" overflowY="auto">
                {/* this Flex to contain search Results after click search bar */}
                {searchResult.map((result) => (
                  <Flex
                    key={result.id}
                    borderRadius="3px"
                    padding="10px"
                    opacity="0.8"
                    columnGap="10px"
                    transition="0.4s"
                    _hover={{
                      cursor: "pointer",
                      backgroundColor: "rgba(22, 24, 35, 0.2)",
                      opacity: "1",
                    }}
                  >
                    <Image
                      borderRadius="3px"
                      boxSize="60px"
                      objectFit="cover"
                      src={result.imgComic}
                      alt={result.name}
                    />
                    <Flex flexDirection="column">
                      <Text fontSize="15px" as="b">
                        {result.name}
                      </Text>
                      <Text>{result.chap} chapter</Text>
                    </Flex>
                  </Flex>
                ))}
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        <Flex paddingRight="20px">
          <Button
            backgroundColor="#FE2C55"
            width="100px"
            height="36px"
            padding="6px 8px"
            transition="0.4s"
            display={isLogin ? "none" : "block"}
            _hover={{
              backgroundColor: "#EF2950",
            }}
            _active={{
              backgroundColor: "#D62848",
            }}
            onClick={onOpen}
          >
            <Text fontSize="18px" as="b" color="#ffffff">
              Sign In
            </Text>
          </Button>

          {/* Start contain avatar after login */}
          <Stack
            direction="row"
            spacing={4}
            display={isLogin ? "block" : "none"}
          >
            <Avatar>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          </Stack>
          {/* End contain avatar after login */}

          {/* Start menu drop down when click on avatar in header */}
          <Menu>
            <MenuButton
              as={Button}
              colorScheme="pink"
              position="absolute"
              borderRadius="50%"
              w="30px"
              h="30px"
              opacity="0"
              display={isLogin ? "block" : "none"}
            ></MenuButton>
            <MenuList
              w="200px"
              boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
            >
              <MenuItem fontWeight="bold">My Account</MenuItem>
              <MenuItem fontWeight="bold">Payments </MenuItem>
              <MenuDivider />
              <MenuItem fontWeight="bold">Docs</MenuItem>
              <MenuItem fontWeight="bold">FAQ</MenuItem>
              <MenuDivider />
              <MenuItem>
                <LogoutButton onLogoutSuccess={handleLogout} />
              </MenuItem>
            </MenuList>
          </Menu>
          {/* End menu drop down when click on avatar in header */}

          {/* Start Form Login */}
          <AlertDialog
            motionPreset="slideInBottom"
            onClose={onClose}
            isOpen={isOpen}
            isCentered
            size="2xl"
          >
            {/* AlertDialogOverlay: Creates an overlay around the alert dialog , preventing interaction with the outside content */}
            <AlertDialogOverlay />

            <AlertDialogContent
              blockSize="510px"
              backgroundColor="#FFFFFF"
              userSelect="none"
              borderRadius="15px"
            >
              <AlertDialogCloseButton />
              {/* Start content of alert dialog */}
              <AlertDialogBody>
                <Flex flexDirection="column" width="100%">
                  <Flex
                    userSelect="none"
                    flexDirection="column"
                    alignItems="center"
                    rowGap="10px"
                  >
                    <Image
                      position="absolute"
                      marginLeft="150px"
                      width="200px"
                      src={images.logoBook}
                      alt="TheLib"
                    />
                    <Text
                      fontSize="30px"
                      as="b"
                      color="#FE2C55"
                      paddingTop="50px"
                    >
                      Welcome back
                    </Text>
                    <Flex alignItems="center" flexDirection="column">
                      <Text userSelect="none">Glad to see you again</Text>
                      <Text userSelect="none">Login to your account below</Text>
                    </Flex>

                    <LoginButton onLoginSuccess={handleLoginSuccess} />
                  </Flex>

                  <Flex flexDirection="column" rowGap="10px" paddingTop="10px">
                    <Text as="b" fontSize="15px" userSelect="none">
                      Email
                    </Text>
                    <Input
                      padding="20px 12px"
                      fontSize="15px"
                      placeholder="enter email..."
                      transition="0.4s"
                      focusBorderColor="pink.400"
                    />
                    <Text
                      typeof="password"
                      as="b"
                      fontSize="15px"
                      userSelect="none"
                    >
                      Password
                    </Text>

                    <InputGroup>
                      <Input
                        padding="20px 12px"
                        fontSize="15px"
                        placeholder="enter password..."
                        transition="0.4s"
                        focusBorderColor="pink.400"
                        type={show ? "text" : "password"}
                      />
                      <InputRightElement h="42px" w="100px">
                        <Button
                          left="18px"
                          padding="0px 11px"
                          h="30px"
                          size="sm"
                          onClick={handleClick}
                        >
                          <Text fontSize="13px">{show ? "Hide" : "Show"}</Text>
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <Button
                      height="40px"
                      backgroundColor="#FE2C55"
                      _hover={{
                        backgroundColor: "#EA284E",
                      }}
                      _active={{
                        backgroundColor: "#E0274B",
                      }}
                    >
                      <Text fontSize="20px" color="#fff">
                        Login
                      </Text>
                    </Button>
                    <Flex padding="15px 7px 7px 60px">
                      <Text paddingRight="2.5px" fontSize="15px">
                        Dont have an account?
                      </Text>
                      <Text
                        fontSize="15px"
                        cursor="pointer"
                        color="#C40D32"
                        _hover={{
                          color: "#FE2C55",
                        }}
                      >
                        Sign up for Free
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </AlertDialogBody>
              {/* End content of alert dialog */}
            </AlertDialogContent>
          </AlertDialog>
          {/* Finish Form Login */}

          {/* <LogoutButton /> */}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
