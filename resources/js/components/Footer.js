import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./style.css";

const useStyles = makeStyles(theme => ({}));

function Footer() {
    useEffect(() => {
        AOS.refresh();
        AOS.init({
            duration: 2000
        });
    });

    const classes = useStyles();
    const footer = (
        <div>
            <div data-aos="fade-up" className="Footer"></div>;
        </div>
    );

    return (
        <div className={classes.root}>
            {footer}
            <Divider />
        </div>
    );
}

export default Footer;
