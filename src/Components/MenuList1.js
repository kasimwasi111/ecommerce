import styled from "@emotion/styled";
import { Menu, MenuItem } from "@mui/material";
// import { style } from "@mui/system";
import { navData } from "./Data";

const MenuList1 = (props) => {
  console.log(props.data);
  return (
    <Menu
      style={{ left: props.left, top: props.top }}
      anchorEl={props.condition}
      open={Boolean(props.condition)}
      onClose={() => props.onclose()}
      // MenuListProps={{ "aria-labelledby": "basic-button" }}
    >
      {props.data
        ? props.data.map((value, ind) => {
            return (
              <MenuItem
                onClick={() => {
                  value.subList
                    ? props.mouse(ind, value.subList)
                    : props.mouse(null, null);
                }}
                onDoubleClick={() =>
                  props.maouseup ? props.mousemove() : null
                }
              >
                {value.name}
              </MenuItem>
            );
          })
        : null}
    </Menu>
  );
};

export default MenuList1;
