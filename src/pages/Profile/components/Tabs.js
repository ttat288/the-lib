import { Flex } from "@chakra-ui/react";

function Tabs({ isActive, tabName, onClick, content }) {
  return (
    <Flex width="32%" height="42px" justifyContent="center" alignItems="center">
      <Flex
        onClick={onClick}
        className={isActive === tabName ? "active" : ""}
        width="99%"
        height="40px"
        justifyContent="center"
        alignItems="center"
        transition="0.3s"
        borderRadius="6px"
        boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        cursor="pointer"
        userSelect="none"
        color={isActive === tabName ? "#fff" : "black"}
        bg={isActive === tabName ? "#FE2C55" : "#fff"}
        _hover={{
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 10px 38px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
          width: "100%",
          height: "42px",
          bg: isActive === tabName ? "#FE2C55" : "#fff",
        }}
      >
        {content}
      </Flex>
    </Flex>
  );
}

export default Tabs;
