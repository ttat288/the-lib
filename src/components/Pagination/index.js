import { Button, Flex } from "@chakra-ui/react";

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <Flex columnGap="3px">
        {pageNumber.map((number) => (
          <Button
            height="40px"
            width="40px"
            onClick={() => paginate(number)}
            key={number}
          >
            {number}
          </Button>
        ))}
      </Flex>
    </>
  );
}

export default Pagination;
