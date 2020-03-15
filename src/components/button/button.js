import React from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import classNames from "../../utils/classNames";
import classes from "./button.module.scss";

import "./button.module.scss";

const CButton = ({ children, onClick, className, variant, rounded, large }) => (
  <Button
    variant={variant}
    color="primary"
    className={classNames(
      classes.button_component,
      large && classes.button_padding,
      rounded && classes.button_raduis,
      className
    )}
    onClick={onClick}
  >
    {children}
  </Button>
);

export default CButton;
