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

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Flex justifyContent="center" w="100%">
      <Flex flexDirection="column" maxWidth="950px">
        <Posts posts={currentPost} loading={loading} />

        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </Flex>
    </Flex>
  );
}

export default Home;
