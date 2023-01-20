import styled from "@emotion/styled";

import { Box } from "@mui/system";
import Header from "../header/Header";

import NavBar from "./NavBar";

const Container = styled(Box)`
  background: #f2f2f2;
  padding: 15px 10px;
`;

const Home = () => {
  return (
    <div style={{ marginTop: 54 }}>
      <Header />
      <NavBar />
      <Container></Container>
    </div>
  );
};

export default Home;
