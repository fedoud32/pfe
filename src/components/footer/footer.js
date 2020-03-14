import React from "react";
import classes from "./footer.module.scss";
/* import facebook from '../../assets/svg/facebook.svg';
import insta from '../../assets/svg/instagram.svg';
import twitter from '../../assets/svg/twitter.svg'; */

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className={classes.footer}>
      <div className={classes.topFooter}>
        <img src="" alt="logo" />
        <div className={classes.socialMedia}>
          {/* <img src={facebook} alt='logo'/>
            <img src={insta} alt='logo'/>
            <img src={twitter} alt='logo'/> */}
        </div>
        
      </div>
      <span className={classes.body}>
        <div className={classes.right}>
          <span>Mentions légales</span>
          <span>Politiques de confidentialités</span>
          <span>Retrait des données personnelles</span>
        </div>
        <span className="container_footer_contents_right">
          Copyright © {date} . Tous droits réservés.
        </span>
      </span>
    </div>
  );
};
export default Footer;
