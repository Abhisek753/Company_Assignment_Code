import {
  Button,
  Box,
  Flex,
  Select,
  SimpleGrid,
  background,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Searchcontext } from "../Components/Searchcontex";
import CardContainer from "./CardContainer";
import axios from "axios";

export default function Savedpage() {
  // const { state, dispatch } = useContext(Appcontext);

  // const [checkvalue, setCheckValue] = useState("");
  const [cat, setCat] = useState("Mobile");
  const [order, setOrder] = useState("asc");
  const [data, setData] = useState([]);
  const [filteredArray, setfilteredArray] = useState([]);
  const [page, setPage] = useState(1);
  const { sdata } = useContext(Searchcontext);

  let savearr = JSON.parse(localStorage.getItem("saveproperty"));
  console.log(savearr);
  const getData = async (cat, order) => {
    try {
      let res = await axios.get(
        `https://real-statedata.vercel.app/random?&_page=${page}&_limit=10&_sort=price&_order=${order}&q=${sdata}`
      );
      let data = await res.data;
      setfilteredArray(data.filter((obj) => savearr.includes(obj.id)));

      console.log(filteredArray);

      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(cat, order);
  }, [cat, order, page, sdata]);

  return (
    <Flex display={["block", "block"]}>
      <Box w={"20%"} boxShadow={"1px 2px 9px #e2e8f0"} zIndex={-1}>
        <Select
          m={"auto"}
          mt={5}
          width={"90%"}
          border={"none"}
          _hover={{ backgroundColor: "teal" }}
          placeholder="Select Order"
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="asc">Ascending order</option>

          <option value="desc">Descending Order</option>
        </Select>
      </Box>
      <Box>
        <SimpleGrid m="auto" w="95%" gap={5} columns={[1, 2, 3, 4]}>
          {filteredArray.length !== 0 &&
            filteredArray.map((el, index, arr) => (
              <CardContainer key={el.id} {...el} deleteToggle={true} getData={getData} />
            ))}
        </SimpleGrid>
        <Box
          display={"flex"}
          m={"auto"}
          width={"30%"}
          justifyContent={"space-between"}
        >
          <Button onClick={() => setPage(page - 1)} bgColor={"plum"}>
            Pre
          </Button>
          <Button bgColor={"#a1a7cf"}>{page}</Button>
          <Button onClick={() => setPage(page + 1)} bgColor={"plum"}>
            Next
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}
