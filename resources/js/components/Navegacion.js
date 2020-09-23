import React from "react";
import ReactDOM from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import usuario from "../json/usuario.json";
import style from "./style.css";
import Navdesplegable from "./Navdesplegable";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 0
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },

    navbtn: {
        background: "#18A0FB",
        borderRadius: 6,
        border: 0,
        color: "white",
        height: "35px",
        width: "125px",
        boxShadow: "0 3px 5px 2px #cdcdcd",
        margin: "0px px 0px 0px"
    },

    btnhero: {
        background: "#18A0FB",
        borderRadius: 6,
        border: 0,
        color: "white",
        height: "50px",
        width: "200px"
    }
}));

const Navegacion = props => {
    const classes = useStyles();
    const toolba = (
        <AppBar position="fixed">
            <Toolbar className="nav">
                <img src="/img/icon.png" width="80px" height="50px" />

                <h2 className="textnav">DENTI ADSI</h2>

                <nav className="navitems">
                    <ul>
                        <li>
                            <a href="reactjs">Inicio</a>
                        </li>
                        <li>
                            <a href="#Servicios">Nuestros Planes</a>
                        </li>
                        <li>
                            <a href="reactjs">Agendar Cita</a>
                        </li>
                        <li>
                            <a href="reactjs">Sobre Nosotros</a>
                        </li>
                    </ul>
                </nav>

                <div className="navbtnpad">
                    <Button
                        classes={{
                            root: classes.navbtn
                        }}
                        href="reactjs"
                    >
                        Iniciar Sesión
                    </Button>
                </div>

                <div className="burger">
                    <Navdesplegable></Navdesplegable>
                </div>
            </Toolbar>
        </AppBar>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static">{toolba}</AppBar>
        </div>
    );
};
export default Navegacion;
