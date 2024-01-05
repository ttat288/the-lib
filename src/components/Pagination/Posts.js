import { Flex, Img, Text } from "@chakra-ui/react";

function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Flex flexWrap="wrap">
      {posts.map((tester) => (
        <Flex
          userSelect="none"
          height="365px"
          flexDirection="column"
          padding="0px 10px"
          width="190px"
          key={tester.id}
        >
          <Img
            marginLeft="0px"
            height="220px"
            width="170px"
            src={tester.imgComic}
          />
          <Flex height="98px">
            <Text fontSize="16px">{tester.name}</Text>
          </Flex>

          <Flex justifyContent="space-between">
            <Text fontSize="16px">Chapter 1</Text>
            <Text
              fontSize="11px"
              color="silver"
              marginTop="4px"
              fontStyle="italic"
            >
              35 phút trước
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize="16px">Chapter 2</Text>
            <Text
              fontSize="11px"
              color="silver"
              marginTop="4px"
              fontStyle="italic"
            >
              35 phút trước
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize="16px">Chapter 3</Text>
            <Text
              fontSize="11px"
              color="silver"
              marginTop="4px"
              fontStyle="italic"
            >
              35 phút trước
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default Posts;
