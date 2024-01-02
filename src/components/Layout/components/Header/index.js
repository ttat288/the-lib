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
  Text,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const cx = classNames.bind(styles);

function Header() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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

        <InputGroup height="46px" width="361px">
          <Input
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
                }}
                color={
                  inputValue.trim() === ""
                    ? "rgba(22, 24, 35, 0.2)"
                    : "rgba(22, 24, 35, 0.75)"
                }
                transform="0.3s"
              />
            </Button>
          </InputRightElement>
        </InputGroup>

        <Flex></Flex>
      </Flex>
    </Flex>
  );
}

export default Header;
