import React from "react";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <span className={classes.body}>
        <span>Mentions légales</span>
        <span>Politiques de confidentialités</span>
        <span>Retrait des données personnelles</span>
      </span>
      <span className="container_footer_contents_right">
        Copyright © 2019 . Tous droits réservés.
      </span>
    </div>
  );
};
export default Footer;
