import { Button, Flex, Img, Text } from "@chakra-ui/react";

function Home() {
  const test = [
    { id: "1", name: "Adventure of the Shadows in the dark knight" },
    { id: "2", name: "Adventure of the Lost Kingdom" },
    { id: "3", name: "Mystery in the Shadows" },
    { id: "4", name: "Epic Quest of Legends" },
    { id: "5", name: "Chronicles of a Time Traveler" },
    { id: "6", name: "The Enchanted Odyssey" },
    { id: "7", name: "Quest for the Forbidden Scroll" },
    { id: "8", name: "Rise of the Galactic Heroes" },
    { id: "9", name: "The Haunting Echoes" },
    { id: "10", name: "Legends of the Crystal Dragons" },
    { id: "11", name: "The Mythical Realm" },
    { id: "12", name: "Secrets of the Whispering Woods" },
    { id: "13", name: "Realm of the Celestial Guardians" },
    { id: "14", name: "The Forbidden Spellbook" },
    { id: "15", name: "Journey to the Forgotten City" },
    { id: "16", name: "Tales of the Starlight Serenade" },
    { id: "17", name: "The Lost Heirloom" },
    { id: "18", name: "Echoes of the Cosmic Symphony" },
    { id: "19", name: "The Cursed Amulet" },
    { id: "20", name: "Sagas of the Eternal Twilight" },
    { id: "21", name: "Whispers of the Mystic Moon" },
    { id: "22", name: "The Enigmatic Nexus" },
    { id: "23", name: "Legends of the Astral Horizon" },
    { id: "24", name: "The Forgotten Prophecy" },
    { id: "25", name: "Chronicles of the Celestial Scribes" },
    { id: "26", name: "Riddles of the Cosmic Sphinx" },
    { id: "27", name: "The Elusive Mirage" },
    { id: "28", name: "Whispers from the Nebula" },
    { id: "29", name: "The Galactic Tapestry" },
    { id: "30", name: "Eternal Echoes" },
    { id: "31", name: "Revelations of the Celestial Oracle" },
    { id: "32", name: "The Enchanted Labyrinth" },
    { id: "33", name: "The Celestial Serenade" },
    { id: "34", name: "Chronicles of the Nebula Guardians" },
    { id: "35", name: "Whispers of the Cosmic Breeze" },
    { id: "36", name: "The Eternal Quest" },
  ];

  return (
    <Flex flexDirection="column" height="3500px">
      <Flex flexWrap="wrap">
        {test.map((tester) => (
          <Flex
            userSelect="none"
            height="365px"
            flexDirection="column"
            padding="0px 10px"
            width="190px"
            key={tester.id}
          >
            <Img
              marginLeft="6px"
              height="220px"
              width="160px"
              src={require("../../assets/images/comic/nguyen-ton.jpg")}
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
      <Flex columnGap="15px">
        <Button height="20px" width="50px">
          1
        </Button>
        <Button height="20px" width="50px">
          2
        </Button>
        <Button height="20px" width="50px">
          3
        </Button>
        <Button height="20px" width="50px">
          4
        </Button>
      </Flex>
    </Flex>
  );
}

export default Home;
