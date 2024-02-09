import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Tabs from "./components/Tabs";
import ContentForTabs from "./components/ContentForTabs";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Profile() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Flex height="100%" w="100%" columnGap="30px" justifyContent="center">
      <Flex
        w="28%"
        flexDirection="column"
        borderRadius="7px"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      >
        <Flex
          borderRadius="7px 7px 0px 0px"
          bg="#FE2C55"
          h="40%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          padding="20px 10px"
        >
          <Avatar
            border="3px solid #fff"
            height="140px"
            w="140px"
            name="Segun Adebayo"
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
          />
          <Text fontSize="18px" as="b" color="#fff">
            Toan Tran
          </Text>
          <Text fontSize="18px" as="b" color="#fff">
            CEO TheLib
          </Text>
        </Flex>

        <Flex
          h="60%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          rowGap="10px"
        >
          <Divider />
          <Flex w="90%">
            <FaPhoneAlt
              style={{
                margin: "4px",
              }}
            />
            <Text>0706310488</Text>
          </Flex>
          <Divider />
          <Flex w="90%">
            <IoMail
              style={{
                margin: "5px",
              }}
            />
            <Text>toanhandsome@gmail.com</Text>
          </Flex>
          <Divider />
          <Flex columnGap="20px" paddingTop="20px" w="90%" textAlign="center">
            <Text fontSize="22px" as="b" w="33.2%">
              154
            </Text>
            <Text fontSize="22px" as="b" w="33.2%">
              12.2k
            </Text>
            <Text fontSize="22px" as="b" w="33.2%">
              9.1k
            </Text>
          </Flex>
          <Flex
            columnGap="20px"
            w="90%"
            textAlign="center"
            marginTop="-10px"
            paddingBottom="20px"
          >
            <Text fontSize="17px" as="b" w="33.2%">
              project
            </Text>
            <Text fontSize="17px" as="b" w="33.2%">
              follow
            </Text>
            <Text fontSize="17px" as="b" w="33.2%">
              view
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="68%"
        height="500px"
        borderRadius="7px"
        flexDirection="column"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        padding="20px"
      >
        <Flex justifyContent="center" alignItems="center" columnGap="20px">
          <Tabs
            content="tab 1"
            tabName="tab1"
            isActive={activeTab}
            onClick={() => handleTabClick("tab1")}
          />
          <Tabs
            content="tab 2"
            tabName="tab2"
            isActive={activeTab}
            onClick={() => handleTabClick("tab2")}
          />
          <Tabs
            content="tab 3"
            tabName="tab3"
            isActive={activeTab}
            onClick={() => handleTabClick("tab3")}
          />
        </Flex>

        <ContentForTabs tabName={activeTab} />
      </Flex>
    </Flex>
  );
}

export default Profile;
