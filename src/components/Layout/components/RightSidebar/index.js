import { Flex } from "@chakra-ui/react";
import History from "./components/History";
import NewStories from "./components/NewStories";
import RecommendedStories from "./components/RecommendedStories";
import { useLocation } from "react-router-dom";

function RightSidebar() {
  const location = useLocation();

  // Kiểm tra xem đường dẫn có phải là "/profile" hay không
  const isProfilePage = location.pathname === "/profile";

  // Nếu đang ở trang profile, không render RightSidebar
  if (isProfilePage) {
    return null;
  }

  return (
    <Flex paddingTop="45px" width="400px" flexDirection="column" rowGap="20px">
      <History />
      <NewStories />
      <RecommendedStories />
    </Flex>
  );
}

export default RightSidebar;
