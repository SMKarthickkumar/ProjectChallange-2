import React, { useLayoutEffect } from "react";
import ListItem from "./ListItem";

const Content = ({ Item }) => {
  return (
    <ul>
      {Item.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default Content;
