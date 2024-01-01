import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
  return (
    // wrapper
    <Flex justifyContent="center" flexDirection="column" alignItems="center">
      <Header />
      {/* container */}
      <Flex w="1150px">
        <Sidebar />
        <Flex flex="1" minH="1000px">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default DefaultLayout;
