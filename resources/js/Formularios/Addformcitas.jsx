import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Postcitaaction } from "../redux/Citas/CitasDucks";
import { Form, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1)
        }
    }
}));

const Addformcitas = ({ Postcitaaction }) => {
    const classes = useStyles();
    const [stateFormulario, setstateFormulario] = useState({
        Nombre: "",
        Descripcion: ""
    });

    const cambios = e => {
        const { name, value } = e.target;
        setstateFormulario({
            ...stateFormulario,
            [name]: value
        });

        console.log("Hola ", name);
    };
    const enviar = e => {
        e.preventDefault();
        Postcitaaction(stateFormulario);
        setstateFormulario({
            Nombre: "",
            Descripcion: ""
        });
    };
    const boton = (
        <div className={classes.root}>
            <Button
                variant="contained"
                color="primary"
                onClick={e => enviar(e)}
            >
                Guardar
            </Button>
        </div>
    );
    
    const formulario = (
        <div>
            <Container fluid="sm">
                <Row>
                    <Col xs={10}>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    name="Nombre"
                                    aria-describedby="my-helper-text"
                                    onChange={e => cambios(e)}
                                    placeholder="Ingrese Nombre"
                                />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Identificación</Form.Label>
                                <Form.Control
                                    name="Identificacion"
                                    aria-describedby="my-helper-text"
                                    onChange={e => cambios(e)}
                                    placeholder="Ingrese Indentificación"
                                />
                            </Form.Group>

                            <Form.Row className="align-items-center">
                                <Form.Label>Tipo de servicio</Form.Label>
                                <Form.Control
                                    name="Tipcita"
                                    aria-describedby="my-helper-text"
                                    onChange={e => cambios(e)}
                                    as="select"
                                    defaultValue="Ortodoncia"
                                >
                                    <option>Ortodoncia</option>
                                    <option>Limpieza Dental</option>
                                    <option>Diseño De Sonrisa</option>
                                </Form.Control>

                                <Form.Label>Doctor</Form.Label>
                                <Form.Control
                                    name="Doctor"
                                    aria-describedby="my-helper-text"
                                    onChange={e => cambios(e)}
                                    as="select"
                                    defaultValue="Belsy"
                                >
                                    <option>Belsy</option>
                                    <option>Sebastian</option>
                                    <option>Varela</option>
                                </Form.Control>
                            </Form.Row>

                            <Form.Row className="align-items-center">
                                <Form.Group as={Col}>
                                    <Form.Label>Fecha</Form.Label>
                                    <br></br>

                                    <TextField
                                        name="Dia"
                                        aria-describedby="my-helper-text"
                                        onChange={e => cambios(e)}
                                        id="date"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Hora</Form.Label>
                                    <br></br>
                                    <TextField
                                        name="Hora"
                                        aria-describedby="my-helper-text"
                                        onChange={e => cambios(e)}
                                        id="time"
                                        type="time"
                                        defaultValue="07:30"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        inputProps={{
                                            step: 300 // 5 min
                                        }}
                                    />
                                </Form.Group>
                            </Form.Row>

                            <br></br>
                        </Form>
                    </Col>
                </Row>
                <center>{boton}</center>
                <br></br>
            </Container>
        </div>
    );

    return (
        <div>
            {formulario}
            <Divider />
            <br></br>
        </div>
    );
};

Addformcitas.propTypes = {
    Postcitaaction: PropTypes.func.isRequired
};

export default connect(null, { Postcitaaction })(Addformcitas);
