import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { SlUserFollowing } from "react-icons/sl";
import { MdOutlineHistory } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";

function Sidebar() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const isTabSelected = (tabName) => {
    return tabName === selectedTab;
  };

  return (
    <Flex width="356px" paddingTop="30px" flexDirection="column">
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
        color={isTabSelected("Home") ? "rgba(254, 44, 85, 1)" : "black"}
        onClick={() => handleTabClick("Home")}
      >
        <AiFillHome
          style={{
            height: "29px",
            width: "29px",
          }}
        />
        <Text paddingLeft="10px" fontSize="20px" as="b">
          Trang Chủ
        </Text>
      </Flex>

      {/* Theo Dõi */}
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
        color={isTabSelected("Following") ? "rgba(254, 44, 85, 1)" : "black"}
        onClick={() => handleTabClick("Following")}
      >
        <SlUserFollowing
          style={{
            height: "29px",
            width: "29px",
          }}
        />
        <Text paddingLeft="10px" fontSize="20px" as="b">
          Theo Dõi
        </Text>
      </Flex>

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
        color={isTabSelected("Type") ? "rgba(254, 44, 85, 1)" : "black"}
        onClick={() => handleTabClick("Type")}
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
    </Flex>
  );
}

export default Sidebar;
