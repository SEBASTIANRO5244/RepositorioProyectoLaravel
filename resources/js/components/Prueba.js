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
function Prueba() {
    useEffect(() => {
        AOS.refresh();
        AOS.init({
            duration: 2000
        });
    });

    const classes = useStyles();
    const hero = (
        <div>
            <div data-aos="zoom-in" className="heroleft">
                <center>
                    <div className="texthero">
                        <h1>¡40% de descuento y revisión gratis!</h1>
                        <h2>Lideres en limpieza y cuidado de su salud oral</h2>
                        <div className="btnhero">
                            <Button
                                classes={{
                                    root: classes.btnhero
                                }}
                            >
                                Registrarse
                            </Button>
                        </div>
                    </div>
                </center>
            </div>
            <div className="heroright"></div>
        </div>
    );

    return (
        <div>
            <div className={classes.root}>{hero}</div>;
        </div>
    );
}

export default Prueba;
