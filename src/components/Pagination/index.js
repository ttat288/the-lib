import { Button, Flex, Text } from "@chakra-ui/react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  paginateNext,
  paginatePrevious,
  isPrevious,
  isNext,
}) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <Flex justifyContent="center" padding="50px 0px" columnGap="3px">
        <Button
          borderRadius="15px"
          height="50px"
          width="50px"
          onClick={() => paginatePrevious()}
          transition="0.4s"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
            cursor: isPrevious ? "pointer" : "not-allowed",
          }}
          disabled={!isPrevious}
        >
          <Text fontSize="15px" as="b">
            <GrPrevious />
          </Text>
        </Button>
        {pageNumber.map((number) => (
          <Button
            borderRadius="15px"
            height="50px"
            width="50px"
            onClick={() => paginate(number)}
            key={number}
            transition="0.4s"
            _hover={{
              boxShadow:
                "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
            }}
            cursor="pointer"
          >
            <Text fontSize="15px" as="b">
              {number}
            </Text>
          </Button>
        ))}
        <Button
          borderRadius="15px"
          height="50px"
          width="50px"
          onClick={() => paginateNext()}
          transition="0.4s"
          _hover={{
            boxShadow:
              "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;",
            cursor: isNext ? "pointer" : "not-allowed",
          }}
          disabled={!isNext}
        >
          <Text fontSize="15px" as="b">
            <GrNext />
          </Text>
        </Button>
      </Flex>
    </>
  );
}

export default Pagination;
