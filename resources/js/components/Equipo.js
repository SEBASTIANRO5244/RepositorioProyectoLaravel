import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import style from "./style.css";
import { Card, Img, Title, Text } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Team1 from "../../../public/img/team3.png";
import Team2 from "../../../public/img/team2.png";
import Team3 from "../../../public/img/team1.png";

const useStyles = makeStyles(theme => ({}));

function Equipo() {
    useEffect(() => {
        AOS.refresh();
        AOS.init({
            duration: 2000
        });
    });

    const classes = useStyles();
    const equipo = (
        <div className="equipo">
            <br></br>
            <div className="container">
                <h1
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="textservice"
                >
                    Nuestro Equipo
                </h1>
                <br></br>
                <center>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        className="row"
                    >
                        <div className="col-sm">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={Team1} />
                                <Card.Body>
                                    <Card.Title>BELSY ROJANO</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Odontologa
                                    </Card.Subtitle>
                                    <Button variant="primary">Contactar</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={Team2} />
                                <Card.Body>
                                    <Card.Title>SEBASTIAN RODRIGUEZ</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Ortodoncista
                                    </Card.Subtitle>
                                    <Button variant="primary">Contactar</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm">
                            <Card style={{ width: "18rem" }}>
                                <Card.Img
                                    variant="top"
                                    src={Team3}
                                    height="270px"
                                />
                                <Card.Body>
                                    <div className="equipo1"></div>
                                    <Card.Title>VARELA GAMING</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        Odontologo
                                    </Card.Subtitle>
                                    <Button variant="primary">Contactar</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </center>
            </div>
            <br></br>
        </div>
    );

    return (
        <div className={classes.root}>
            {equipo}
            <Divider data-aos="fade-up" />
        </div>
    );
}

export default Equipo;
