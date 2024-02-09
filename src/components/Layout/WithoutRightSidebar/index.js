import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function WithoutRightSidebar({ children }) {
  return (
    // wrapper
    <Flex justifyContent="center" flexDirection="column" alignItems="center">
      <Header />
      {/* container */}
      <Flex w="98.9vw" paddingTop="50px">
        <Sidebar />
        <Flex flex="1" paddingTop="40px">
          {children}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default WithoutRightSidebar;
