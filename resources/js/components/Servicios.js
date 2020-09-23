import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./style.css";

const useStyles = makeStyles(theme => ({}));

function Servicios() {
    useEffect(() => {
        AOS.refresh();
        AOS.init({
            duration: 2000
        });
    });

    const classes = useStyles();
    const servicios = (
        <div className="servicios">
            <div className="space"></div>
            <div className="container">
                <h1
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    className="textservice"
                >
                    Ofrecemos los siguientes servicios
                </h1>
                <br></br>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="row"
                >
                    <div className="col-sm" id="cartas">
                        <div
                            data-aos="zoom-out"
                            data-aos-duration="1000"
                            className="circulo1"
                        ></div>
                        <h2 className="servicestitle">Limpieza Dental</h2>
                        <p className="servicestext">
                            La limpieza dental es parte de la higiene oral e
                            involucra la remoción de la placa dental de los
                            dientes con la intención de prevenir cavidades,
                            gingivitis, y enfermedades peridontales.
                        </p>
                        <br></br>
                        <button type="button" className="btn btn-link">
                            Ver más...
                        </button>
                    </div>

                    <div className="col-sm" id="cartas">
                        <div
                            data-aos="zoom-out"
                            data-aos-duration="1000"
                            className="circulo2"
                        ></div>
                        <h2 className="servicestitle">Ortodoncia</h2>
                        <p className="servicestext">
                            La ortodoncia es una especialidad de la odontología
                            que se encarga de todo el estudio, prevención,
                            diagnóstico y tratamiento de las anomalías de forma,
                            posición, relación y función de las estructuras
                            dentomaxilofaciales.
                        </p>
                        <button type="button" className="btn btn-link">
                            Ver más...
                        </button>
                    </div>

                    <div className="col-sm" id="cartas">
                        <div
                            data-aos="zoom-out"
                            data-aos-duration="1000"
                            className="circulo3"
                        ></div>
                        <h2 className="servicestitle">Diseño de Sonrisa</h2>
                        <p className="servicestext">
                            Es una serie de procedimientos odontológicos que nos
                            permiten mejorar el aspecto de la sonrisa; es clave
                            contar con una buena salud bucal para dar un buen
                            pronóstico al tratamiento final.
                        </p>
                        <button type="button" className="btn btn-link">
                            Ver más...
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    );

    return (
        <div className={classes.root}>
            {servicios}
            < Divider data-aos="fade-up" />
        </div>
    );
}

export default Servicios;
