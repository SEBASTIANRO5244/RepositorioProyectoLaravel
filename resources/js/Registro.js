import React from "react";
import ReactDOM from "react-dom";
import Navegacion from "./components/Navegacion";
import Lista from "./components/citas/Lista";
import { Provider } from "react-redux";
import generateStotrePacientes from "./redux/Citas/Store";
import AddFormcitas from "./Formularios/Addformcitas";

const Registro = () => {
    const storeLista = generateStotrePacientes();

    return (
        <div>
            <Navegacion />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>
                <h1>Formulario Agendar Citas</h1>
            </center>
            <br></br>
            <Provider store={storeLista}>
                <AddFormcitas />
                <Lista></Lista>
            </Provider>
        </div>
    );
};

export default Registro;
if (document.getElementById("registro")) {
    ReactDOM.render(<Registro></Registro>, document.getElementById("registro"));
}
