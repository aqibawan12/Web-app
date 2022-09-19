import { Box, Card } from "@mui/material";
import React from "react";
import "./styles.css";

const itemsContents = (props) => {
  let name1 = props.name;
  let id = props.index;

  return (
    <>
      <Box
        className='adjust'
        onClick={() => {
          props.onselect(id);
        }}
      >
        <Card
          style={{
            display: "flex",
            flexDirection: "column",

            marginBottom: "20px",
          }}
        >
          <img className='pic_adjust' src={props.image[0]} alt='123' />

          <span style={{ marginTop: "-32px", marginLeft: "12px" }}>
            <h5 style={{ fontSize: "25px" }}>{name1}</h5>
            <p style={{ fontSize: "22px", marginTop: "-25px" }}>
              Rs {props.price}
            </p>
          </span>
        </Card>
      </Box>
    </>
  );
};

export default itemsContents;
