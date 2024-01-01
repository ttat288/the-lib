import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import {
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Button,
} from "@chakra-ui/react";

const cx = classNames.bind(styles);

function Header() {
  return (
    <Flex
      w="100%"
      height="60px"
      justifyContent="center"
      boxShadow="0px 1px 1px rgb(0 0 0 /12%)"
    >
      <Flex w="1150px" h="100%">
        {/* <Text as="b" fontSize="5xl">
          TheLib
        </Text>

        <InputGroup size="md" height="auto" width="auto">
          <Input
            pr="4.5rem"
            placeholder="Search comic"
            height="30px"
            width="300px"
            bgColor="#F2F2F2"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm">
              Search
            </Button>
          </InputRightElement>
        </InputGroup> */}
      </Flex>
    </Flex>
  );
}

export default Header;
