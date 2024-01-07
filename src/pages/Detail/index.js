import {
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  Img,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
// import { useParams } from "react-router-dom";
import { MdPerson } from "react-icons/md";
import { TbFileDescription } from "react-icons/tb";
import { FaTag } from "react-icons/fa";
import { MdOutlineWifi } from "react-icons/md";
import React, { useEffect, useState } from "react";

function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const { id } = useParams();
  const { isOpen, onToggle } = useDisclosure();

  // show hide chapter list
  const [isChapterListOpen, setChapterListOpen] = useState(false);
  const toggleChapterList = () => {
    setChapterListOpen(!isChapterListOpen);
  };

  return (
    <Flex width="100%" justifyContent="center" padding="0px 20px">
      {/* Start Infomation of story */}
      <Flex
        userSelect="none"
        marginTop="5px"
        borderRadius="15px"
        flexDirection="column"
        alignItems="center"
        w="100%"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
      >
        {/* header */}
        <Text marginTop="10px" fontSize="21px">
          HOÀNG HẬU NƯƠNG NƯƠNG ĐÍCH NĂM XU ĐẶC HIỆU
        </Text>
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
                      paddingRight: "10px",
                      marginTop: "-10px",
                      fontSize: "40px",
                      color: "#777676",
                    }}
                  />
                  Tác giả:
                </Text>
                <Text display="flex" w="200px" fontSize="16px" color="#777676">
                  <MdOutlineWifi
                    style={{
                      paddingRight: "10px",
                      marginTop: "-10px",
                      fontSize: "40px",
                      color: "#777676",
                    }}
                  />
                  Trạng thái:
                </Text>
                <Text display="flex" w="200px" fontSize="16px" color="#777676">
                  <FaTag
                    style={{
                      paddingRight: "14px",
                      marginTop: "-10px",
                      fontSize: "39px",
                      color: "#777676",
                    }}
                  />
                  Thể loại:
                </Text>
              </Flex>

              <Flex flexDirection="column" rowGap="21px">
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
        {/* Start Description */}
        <Flex width="80%" marginTop="100px" flexDirection="column">
          <Flex>
            <Flex w="100%">
              <Button
                marginBottom="10px"
                onClick={onToggle}
                color="#fff"
                height="40px"
                bg="#FE2C55"
                _hover={{ bg: "#EF2950" }}
                _active={{ bg: "#D62848" }}
              >
                <Text
                  fontSize="15px"
                  display="flex"
                  color="#fff"
                  marginTop="4px"
                >
                  <TbFileDescription
                    style={{
                      paddingRight: "4px",
                      marginTop: "-10px",
                      fontSize: "30px",
                    }}
                  />
                  MÔ TẢ
                </Text>
              </Button>
            </Flex>
          </Flex>

          <Box width="100%" height="2px" bg="red" />

          <Collapse in={isOpen} animateOpacity>
            <Box
              p="10px"
              mt="4"
              color="#fff"
              bg="#FE2C55"
              rounded="md"
              shadow="md"
            >
              <Text fontSize="15px">
                Vu Xá Mục tiểu thư, một sát thủ hiện đại tinh thông kĩ thuật
                dịch dung đặc hiệu! Ngoài ý muốn xuyên việt về thời cổ đại, trở
                thành tam tiểu thư ngốc của tướng phủ. Đối diện với một bầy bạch
                liên hoa, lục trà biểu, người nhà hâm dở, phúc hắc vương gia,
                tầm hoa hoàng tử...Vận dụng kĩ thuật hóa trang, tự chế đạo cụ,
                qua năm quan trảm sáu tướng, dần dần bước lên ngôi vị hoàng hậu
                nương nương.
              </Text>
            </Box>
          </Collapse>
        </Flex>
        {/* End Description */}

        {/* Start Chapter list */}
        <Flex width="80%" marginTop="10px" flexDirection="column">
          <Flex>
            <Flex w="100%">
              <Button
                marginBottom="10px"
                onClick={toggleChapterList}
                color="#fff"
                height="40px"
                bg="#FE2C55"
                _hover={{ bg: "#EF2950" }}
                _active={{ bg: "#D62848" }}
              >
                <Text
                  fontSize="15px"
                  display="flex"
                  color="#fff"
                  marginTop="4px"
                >
                  <TbFileDescription
                    style={{
                      paddingRight: "4px",
                      marginTop: "-10px",
                      fontSize: "30px",
                    }}
                  />
                  Danh Sách Chương
                </Text>
              </Button>
            </Flex>
          </Flex>

          <Box width="100%" height="1px" bg="red" />

          <Collapse in={isChapterListOpen} animateOpacity>
            <Flex
              borderRadius="15px"
              marginTop="10px"
              border="2px solid silver"
              flexDirection="column"
              padding="10px"
              rowGap="9px"
            >
              {/* Start Chapter */}
              <Divider marginTop="-11px" />
              <Text
                paddingBottom="10px"
                fontSize="15px"
                _hover={{
                  cursor: "pointer",
                  color: "#FE2C55",
                }}
              >
                chương 1
              </Text>
              <Divider marginTop="-11px" />
              <Text
                paddingBottom="10px"
                fontSize="15px"
                _hover={{
                  cursor: "pointer",
                  color: "#FE2C55",
                }}
              >
                chương 1
              </Text>
              <Divider marginTop="-11px" />
              <Text
                paddingBottom="10px"
                fontSize="15px"
                _hover={{
                  cursor: "pointer",
                  color: "#FE2C55",
                }}
              >
                chương 1
              </Text>
              <Divider marginTop="-11px" />
              <Text
                paddingBottom="10px"
                fontSize="15px"
                _hover={{
                  cursor: "pointer",
                  color: "#FE2C55",
                }}
              >
                chương 1
              </Text>
              <Divider marginTop="-11px" />
              <Text
                paddingBottom="10px"
                fontSize="15px"
                _hover={{
                  cursor: "pointer",
                  color: "#FE2C55",
                }}
              >
                chương 1
              </Text>
              <Divider marginTop="-11px" />
              <Text
                paddingBottom="10px"
                fontSize="15px"
                _hover={{
                  cursor: "pointer",
                  color: "#FE2C55",
                }}
              >
                chương 1
              </Text>
              <Divider marginTop="-11px" />
              <Text
                paddingBottom="10px"
                fontSize="15px"
                _hover={{
                  cursor: "pointer",
                  color: "#FE2C55",
                }}
              >
                chương 1
              </Text>
              <Divider marginTop="-11px" />
              <Text
                paddingBottom="10px"
                fontSize="15px"
                _hover={{
                  cursor: "pointer",
                  color: "#FE2C55",
                }}
              >
                chương 1
              </Text>
              <Divider marginTop="-11px" />
              <Text
                paddingBottom="10px"
                fontSize="15px"
                _hover={{
                  cursor: "pointer",
                  color: "#FE2C55",
                }}
              >
                chương 1
              </Text>
              <Divider marginTop="-11px" />
              <Text
                paddingBottom="10px"
                fontSize="15px"
                _hover={{
                  cursor: "pointer",
                  color: "#FE2C55",
                }}
              >
                chương 1
              </Text>
              <Divider marginTop="-11px" />
              <Text
                paddingBottom="10px"
                fontSize="15px"
                _hover={{
                  cursor: "pointer",
                  color: "#FE2C55",
                }}
              >
                chương 1
              </Text>
              {/* End Chapter */}
            </Flex>
          </Collapse>
        </Flex>
        {/* End Chapter list */}
      </Flex>
      {/* End Infomation of story */}
    </Flex>
  );
}

export default Detail;
