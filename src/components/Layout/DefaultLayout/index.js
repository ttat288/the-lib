import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import Footer from "../components/Footer";
import RightSidebar from "../components/RightSidebar";

function DefaultLayout({ children }) {
  return (
    // wrapper
    <Flex justifyContent="center" flexDirection="column" alignItems="center">
      <Header />
      {/* container */}
      <Flex w="100vw" paddingTop="50px">
        <Sidebar />
        <Flex flex="1" paddingTop="40px">
          {children}
        </Flex>
        <RightSidebar />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default DefaultLayout;
