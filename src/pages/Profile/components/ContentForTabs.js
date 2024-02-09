import { Alert, Badge, Divider, Flex, Text } from "@chakra-ui/react";

function ContentForTabs({ tabName }) {
  return (
    <Flex padding="20px 25px" width="100%">
      {tabName === "tab1" && (
        <Flex flexDirection="column" w="100%">
          <Flex w="100%">
            <Flex flexDirection="column" width="48%">
              <Text as="b" fontSize="20px">
                User Profile
              </Text>
              <Text as="b" fontSize="17px" marginTop="10px">
                About
              </Text>
              <Text fontSize="17px">Web Designer, UI/UX Engineer</Text>
              <Text as="b" fontSize="17px" marginTop="10px">
                Hobbies
              </Text>
              <Text fontSize="17px">
                Indie music, skiing and hiking. I love the great outdoors.
              </Text>
              <Text as="b" fontSize="20px" marginTop="10px">
                Recent Activity
              </Text>
            </Flex>
            <Flex
              width="50%"
              height="100px"
              marginTop="35px"
              flexDirection="column"
            >
              <Text as="b" fontSize="17px">
                Recent badges
              </Text>
              <Flex columnGap="5px" paddingBottom="10px">
                <Badge fontSize="10px">Default</Badge>
                <Badge fontSize="10px">Default</Badge>
                <Badge fontSize="10px">Default</Badge>
                <Badge fontSize="10px">Default</Badge>
              </Flex>
              <Divider />
              <Flex columnGap="5px" paddingBottom="10px" paddingTop="10px">
                <Badge fontSize="10px" colorScheme="green">
                  900 follow
                </Badge>
                <Badge fontSize="10px" colorScheme="red">
                  43 Forks
                </Badge>
                <Badge fontSize="10px" colorScheme="purple">
                  245 Views
                </Badge>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection="column" rowGap="10px">
            <Alert status="success" variant="left-accent">
              Data uploaded to the server. Fire on!
            </Alert>
            <Alert status="error" variant="left-accent">
              Data uploaded to the server. Fire on!
            </Alert>
            <Alert status="success" variant="left-accent">
              Data uploaded to the server. Fire on!
            </Alert>
          </Flex>
        </Flex>
      )}
      {tabName === "tab2" && <Flex>Content for Tab 2</Flex>}
      {tabName === "tab3" && <Flex>Content for Tab 3</Flex>}
    </Flex>
  );
}

export default ContentForTabs;
