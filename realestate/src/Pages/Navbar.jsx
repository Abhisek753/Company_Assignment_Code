import {
  Grid,
  Avatar,
  Box,
  Flex,
  Spacer,
  Select,
  Input,
  Button,
} from "@chakra-ui/react";

import { Link, Navigate } from "react-router-dom";
//   import { Appcontext } from "./Statemange";
import { Profiler, useContext } from "react";
import { Searchcontext } from "../Components/Searchcontex";
import { MdPerson } from "react-icons/md";

export default function Navbar() {
  // const [sname,setSname]=useState("")
  // const {  loginstate, setloginstate } = useContext(Appcontext);
  const { sdata, setSdata } = useContext(Searchcontext);
  const handelChange = (e) => {
    const val = e.target.value;
    console.log(val);
    setSdata(val);
  };
  console.log(sdata);

  return (
    <>
      <Box h={"70px"} bg="#E2E8F0">
        <Box w="90%" h="40px" pt="4px" m="auto">
          <Flex gap="10px">
            <Link to="/">
              {" "}
              <Avatar src="https://img.freepik.com/premium-vector/real-estate-property-logo-design_148584-45.jpg?w=2000"></Avatar>
            </Link>

            <Input
              bg="white"
              pl="10px"
              onChange={handelChange}
              placeholder="Search"
            />
            <Spacer />
            <Select bg="plum" placeholder="Select">
              <option value="English">English</option>
              <option value="hindi">hindi</option>
              <option value="Marathi">Marathi</option>
              <option value="Bengoli">Bengoli</option>
            </Select>
            <Spacer />

            <Spacer />
            <Link to={"/save"}>
              <Button mr="10px" bgColor={"plum"} p={"25px"}>
                Saved
              </Button>
            </Link>
            <Spacer />
            {/* {loginstate == false ? true : null} */}
            <Spacer />
            <Spacer />
            {/* {loginstate ? ( */}
            <Button
              mr="10px"
              bgColor={"plum"}
              p={"25px"}
              //  onClick={() => setloginstate(false)}
            >
              Logout
            </Button>
            {/* ) : ( */}
            <Button bgColor={"plum"} p={"25px"}>
              {" "}
              <Link to="/login">Login</Link>
            </Button>
            {/* )} */}
            <Spacer />
          </Flex>
        </Box>
      </Box>
      <Box border="1px solid grey" mt="2px" bg="grey"></Box>
    </>
  );
}
