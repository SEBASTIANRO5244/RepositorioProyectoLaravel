import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    ObtenerListaCitasAccion,
    GuardarCitasAcccion
} from "../../redux/Citas/CitasDucks";
import { Table } from "react-bootstrap";
import { isArguments } from "lodash";
import Botoneliminarcita from "../../Botones/Botoneliminarcita";
import Button from "@material-ui/core/Button";

const Lista = () => {
    const uDispatch = useDispatch();
    const uSelector = useSelector(store => store.citas.array);
    return (
        <div>
            <center>
                <h1>Listado De Citas</h1>
                <br></br>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => uDispatch(ObtenerListaCitasAccion())}
                >
                    Obtener Citas
                </Button>
            </center>
            <br></br>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Identificacion</th>
                        <th>Nombre</th>
                        <th>Servicio</th>
                        <th>Hora</th>
                        <th>Doctor</th>
                        <th>Fecha</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {uSelector.map((item, i) => (
                        <tr>
                            <td key={item.id}>{item.Identificacion}</td>
                            <td key={item.id}>{item.Nombre}</td>
                            <td key={item.id}>{item.Tipcita}</td>
                            <td key={item.id}>{item.Hora}</td>
                            <td key={item.id}>{item.Doctor}</td>
                            <td key={item.id}>{item.Dia}</td>
                            <div>
                                <td key={item.id}>
                                    <Botoneliminarcita id={item.id} />
                                </td>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Lista;
