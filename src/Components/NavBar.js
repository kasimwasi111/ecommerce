import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";

import React, { useState } from "react";
import { navData } from "./Data";
import MenuList1 from "./MenuList1";
import "../index.css";

const NavBarWrapper = styled(Box)`
  display: flex;
  padding: 0 50px 0 50px;
  justify-content: space-between;
  overflow: hidden;

  box-shadow: 5px 0px 5px 0px rgb(0, 0, 0, 0.2);
`;
const NavItemStyle = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 550;
`;

const NavBar = () => {
  const [open, setopen] = useState(false);
  const [childopen, setochildpen] = useState(false);

  const [listData, setListData] = useState();
  const [childIndex, setchildIndex] = useState();
  const [childArr, setChildArr] = useState();
  // const handleClick = (event) => {
  //   setopen(event.currentTarget);

  // };
  const handleClose = () => {
    setopen(false);
  };
  const handleChildclose = () => {
    setochildpen(false);
  };
  const mouseup = (id, childarr) => {
    setchildIndex(id);
    setChildArr(childarr);
    setochildpen(true);
  };
  const mousefalse = () => {
    setochildpen(false);
  };
  const mousemove = () => {
    setochildpen(false);
  };
  console.log(childArr);

  return (
    <NavBarWrapper>
      {navData.map((data, index) => {
        return (
          <NavItemStyle
            onClick={() => {
              setopen(true);
              setListData(index);
            }}
          >
            <img src={data.url} alt="nav-Item" style={{ width: 64 }} />
            <Text>{data.text}</Text>
          </NavItemStyle>
        );
      })}

      {listData ? (
        <MenuList1
          className="listElement"
          condition={open}
          onclose={handleClose}
          data={navData[listData].listItem}
          mouse={mouseup}
          mousemove={mousemove}
          left={300}
          top={-40}
        />
      ) : null}

      {childArr ? (
        <MenuList1
          condition={childopen}
          onclose={handleChildclose}
          data={childArr}
          maouseup={mousefalse}
          left={500}
          top={-40}
        />
      ) : null}
    </NavBarWrapper>
  );
};
export default NavBar;
