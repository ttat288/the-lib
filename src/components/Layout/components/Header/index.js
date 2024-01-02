import { useState } from "react";
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
} from "@chakra-ui/react";
import { searchResult } from "../../../../mooks/data.js";

const cx = classNames.bind(styles);

function Header() {
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

  return (
    <Flex
      w="100%"
      height="60px"
      justifyContent="center"
      boxShadow="0px 1px 1px rgb(0 0 0 /12%)"
    >
      <Flex
        w="1150px"
        h="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src={images.logo} alt="TheLib" />

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
            <PopoverContent width="361px" maxH="330px" overflowY="auto">
              <PopoverBody>
                {/* this Flex to contain search Results */}
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
        <Flex>
          <Button
            backgroundColor="#FE2C55"
            width="100px"
            height="36px"
            padding="6px 8px"
            transition="0.4s"
            _hover={{
              backgroundColor: "#EF2950",
            }}
            _active={{
              backgroundColor: "#D62848",
            }}
          >
            <Text fontSize="18px" as="b" color="#ffffff">
              Sign In
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
