import styled from "@emotion/styled";
// import { products } from "../data/Data";

import { Box } from "@mui/system";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getProducts } from "../../redux/actions/productAction";

import NavBar from "./NavBar";

const Container = styled(Box)`
  background: #f2f2f2;
  padding: 15px 10px;
`;

const Home = () => {
  return (
    <div style={{ marginTop: 54 }}>
      <NavBar />
      <Container></Container>
    </div>
  );
};

export default Home;
