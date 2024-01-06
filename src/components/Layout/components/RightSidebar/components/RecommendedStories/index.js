import { Flex, Image, Text } from "@chakra-ui/react";
import { RecommendedStoriesData } from "../../../../../../mooks/TestHome";

function RecommendedStories() {
  return (
    <Flex
      width="380px"
      flexDirection="column"
      alignItems="center"
      paddingBottom="15px"
      borderRadius="15px"
      boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Text
        color="#FE2C55"
        marginRight="48%"
        fontSize="18px"
        padding="15px 0px"
      >
        Truyện đề xuất
      </Text>
      {RecommendedStoriesData.map((result) => (
        <Flex w="100%" height="100%" justifyContent="center">
          <Flex
            width="99%"
            height="99%"
            zIndex="1"
            w="90%"
            borderTop="1px solid #ccc"
            key={result.id}
            borderRadius="3px"
            padding="10px"
            opacity="0.8"
            columnGap="10px"
            transition="0.3s"
            _hover={{
              cursor: "pointer",
              // backgroundColor: "rgba(22, 24, 35, 0.2)",
              opacity: "1",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              borderRadius="3px"
              boxSize="60px"
              objectFit="cover"
              src={result.imgComic}
              alt={result.name}
            />
            <Flex flexDirection="column">
              <Text fontSize="15px" as="b">
                {result.name}
              </Text>
              <Text>{result.chap} chapter</Text>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default RecommendedStories;
