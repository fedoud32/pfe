import React from "react";
import classes from "./card.module.scss";

const Card = props => {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.leftPart}></div>
      <div className={classes.rightPart}>{props.children}</div>
    </div>
  );
};
export default Card;
