import { Flex, Img, Text } from "@chakra-ui/react";

function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      rowGap="20px"
      columnGap="10px"
    >
      {posts.map((tester) => (
        <Flex
          userSelect="none"
          padding="0px 10px"
          height="375px"
          width="220px"
          key={tester.id}
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            padding="10px"
            borderRadius="10px"
            height="365px"
            width="185px"
            flexDirection="column"
            _hover={{
              height: "370px",
              width: "190px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
            }}
            _active={{
              transition: "0s",
              height: "365px",
              width: "185px",
              boxShadow: "none",
            }}
            alignItems="center"
            transition="0.4s"
            justifyContent="space-between"
            border="1px solid #ccc"
          >
            <Img width="90%" src={tester.imgComic} />
            <Flex maxheight="98px" w="100%">
              <Text
                fontSize="16px"
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
              >
                {tester.name}
              </Text>
            </Flex>

            {/* Start Flex tag contain chapter and timer */}
            <Flex flexDirection="column" w="100%">
              <Flex justifyContent="space-between" w="100%">
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
              <Flex justifyContent="space-between" w="100%">
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
              <Flex justifyContent="space-between" w="100%">
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
            {/* End Flex tag contain chapter and timer */}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default Posts;
