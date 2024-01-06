import { Flex } from "@chakra-ui/react";
import { TestHome } from "../../mooks/TestHome";
import { useEffect, useState } from "react";
import Posts from "../../components/Pagination/Posts";
import Pagination from "../../components/Pagination";
function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(36);
  const [isPrevious, setIsPrevious] = useState(true);
  const [isNext, setIsNext] = useState(true);
  useEffect(() => {
    // setLoading(true);
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPosts(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => console.log(error));
    setLoading(true);
    setPosts(TestHome);
    setLoading(false);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPage = Math.ceil(posts.length / postsPerPage);

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (currentPage === 1) {
      setIsPrevious(false);
    }

    if (currentPage > 1) {
      setIsPrevious(true);
    }
    if (currentPage < totalPage) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [currentPage, totalPage]);

  //if last page can't click "next"
  const paginateNext = () => {
    if (totalPage > currentPage) setCurrentPage(currentPage + 1);
  };
  //if first page can't click "previous"
  const paginatePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Flex justifyContent="center" w="100%">
      <Flex flexDirection="column" maxWidth="950px">
        <Posts posts={currentPost} loading={loading} />

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          paginateNext={paginateNext}
          paginatePrevious={paginatePrevious}
          isPrevious={isPrevious}
          isNext={isNext}
        />
      </Flex>
    </Flex>
  );
}

export default Home;
