import { Button, Flex, Img, Text } from "@chakra-ui/react";
// import { useParams } from "react-router-dom";
import { MdPerson } from "react-icons/md";
function Detail() {
  // const { id } = useParams();

  return (
    <Flex width="100%" justifyContent="center" padding="0px 20px">
      {/* Start Infomation of story */}
      <Flex
        marginTop="5px"
        borderRadius="15px"
        flexDirection="column"
        alignItems="center"
        w="100%"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      >
        {/* header */}
        <Text fontSize="21px">HOÀNG HẬU NƯƠNG NƯƠNG ĐÍCH NĂM XU ĐẶC HIỆU</Text>
        <Text fontSize="13px" fontStyle="italic">
          [Cập nhật lúc: 2023-12-30 13:00:04]
        </Text>

        {/* body */}
        <Flex marginTop="50px" width="80%">
          <Img
            maxWidth="220px"
            maxHeight="260px"
            src="https://img.nettruyenfull.com/story/18119/avatar.png"
          />

          {/* Contain image, Author, status, genre ;   button:readfirst, readlast */}
          <Flex
            width="90%"
            flexDirection="column"
            rowGap="15px"
            marginLeft="50px"
          >
            <Flex>
              <Flex flexDirection="column" rowGap="17px">
                <Text display="flex" w="200px" fontSize="16px" color="#777676">
                  <MdPerson
                    style={{
                      marginTop: "-2px",
                      fontSize: "30px",
                      color: "#777676",
                    }}
                  />
                  Thể loại:
                </Text>
                <Text display="flex" w="200px" fontSize="16px" color="#777676">
                  <MdPerson
                    style={{
                      marginTop: "-2px",
                      fontSize: "30px",
                      color: "#777676",
                    }}
                  />
                  Tác giả:
                </Text>
                <Text display="flex" w="200px" fontSize="16px" color="#777676">
                  <MdPerson
                    style={{
                      marginTop: "-2px",
                      fontSize: "30px",
                      color: "#777676",
                    }}
                  />
                  Trạng thái:
                </Text>
              </Flex>

              <Flex flexDirection="column" rowGap="20px">
                <Text color="#777676" fontSize="16px">
                  Đang cập nhật
                </Text>
                <Text color="#777676" fontSize="16px">
                  Hoàn thành
                </Text>
                <Text color="#777676" fontSize="16px" wordBreak={"break-word"}>
                  Drama - Manhua - Romance - Shoujo - Truyện Màu - Xuyên Không
                </Text>
              </Flex>
            </Flex>

            <Flex marginTop="40px" columnGap="20px">
              <Button
                color="#fff"
                width="100px"
                height="40px"
                bg="#FE2C55"
                _hover={{ bg: "#EF2950" }}
                _active={{ bg: "#D62848" }}
              >
                <Text fontSize="14px">Đọc từ đầu</Text>
              </Button>
              <Button
                color="#fff"
                width="100px"
                height="40px"
                bg="#FE2C55"
                _hover={{ bg: "#EF2950" }}
                _active={{ bg: "#D62848" }}
              >
                <Text fontSize="14px">Đọc mới nhất</Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* End Infomation of story */}
    </Flex>
  );
}

export default Detail;
