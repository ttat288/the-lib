import { Flex } from "@chakra-ui/react";
import History from "./components/History";
import NewStories from "./components/NewStories";
import RecommendedStories from "./components/RecommendedStories";

function RightSidebar() {
  return (
    <Flex paddingTop="45px" width="400px" flexDirection="column" rowGap="20px">
      <History />
      <NewStories />
      <RecommendedStories />
    </Flex>
  );
}

export default RightSidebar;
