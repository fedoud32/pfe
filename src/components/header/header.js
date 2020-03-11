import React from "react";
import classes from "./header.module.scss";

const Header = () => {
  const headeItems = [
    {
      title: "acceuil"
    },
    {
      title: "a propos"
    },
    {
      title: "demarrer"
    },
    {
      title: "service"
    },
    {
      title: "profil"
    }
  ];
  return (
    <div className={classes.container}>
      <div className={classes.items}>
        {headeItems.map(item => (
          <div className={classes.singleItem}>{item.title}</div>
        ))}
      </div>
    </div>
  );
};
export default Header;
