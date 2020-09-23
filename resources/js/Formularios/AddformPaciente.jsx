import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form, Container, Row, Col } from "react-bootstrap";
import {
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { GuardarPacientesAccion } from "../redux/Citas/CitasDucks";
import { connect } from "react-redux";
const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1)
        }
    }
}));
const AddformPaciente = ({ GuardarPacientesAccion }) => {
    const classes = useStyles();
    const [stateFormulario, setstateFormulario] = useState({
        id: "",
        Nombre: "",
        Email: "",
        Contra: "",
        Direccion: ""
    });

    const cambios = e => {
        const { name, value } = e.target;
        setstateFormulario({
            ...stateFormulario,
            [name]: value
        });
    };

    const enviar = e => {
        e.preventDefault();
        GuardarPacientesAccion(stateFormulario);
        setstateFormulario({
            id: "",
            Nombre: "",
            Email: "",
            Contra: "",
            Direccion: ""
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>

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
                                    name="id"
                                    aria-describedby="my-helper-text"
                                    onChange={e => cambios(e)}
                                    placeholder="Ingrese Indentificación"
                                />
                            </Form.Group>

                            <Form.Row className="align-items-center">
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="Email"
                                        aria-describedby="my-helper-text"
                                        onChange={e => cambios(e)}
                                        type="email"
                                        placeholder="Ingrese su email"
                                    />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        name="Contra"
                                        aria-describedby="my-helper-text"
                                        onChange={e => cambios(e)}
                                        type="password"
                                        placeholder="Ingrese su contraseña"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control
                                    name="Direccion"
                                    aria-describedby="my-helper-text"
                                    onChange={e => cambios(e)}
                                    placeholder="Dirección"
                                />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <div>{boton}</div>
        </div>
    );

    return <div>{formulario}</div>;
};

GuardarPacientesAccion.propTypes = {
    GuardarPacientesAccion: PropTypes.func.isRequired
};

export default connect(null, { GuardarPacientesAccion })(AddformPaciente);
