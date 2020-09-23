import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    btnhero: {
        background: "#18A0FB",
        borderRadius: 6,
        border: 0,
        color: "white",
        height: "50px",
        width: "200px"
    }
}));
function Hero() {
    useEffect(() => {
        AOS.refresh();
        AOS.init({
            duration: 2000
        });
    });

    const classes = useStyles();
    const hero = (
        <div data-aos="fade-up">
            <div className="heroleft2"></div>
            <div className="heroright"></div>
        </div>
    );

    return (
        <div>
            <div className={classes.root}>{hero}</div>
        </div>
    );
}

export default Hero;
