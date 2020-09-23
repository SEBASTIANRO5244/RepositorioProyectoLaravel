import React from "react";
import ReactDOM from "react-dom";
import Navegacion from "./components/Navegacion";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Servicios from "./components/Servicios";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer";
import generateStotrecitas from "./redux/Citas/Store";

const Esqueleto = () => {
    return (
        <div>
            <Navegacion></Navegacion>
            <Hero></Hero>
            <Servicios data-aos="fade-up"></Servicios>
            <Equipo></Equipo>
            <Footer></Footer>
        </div>
    );
};

if (document.getElementById("contenido")) {
    ReactDOM.render(
        <Esqueleto></Esqueleto>,
        document.getElementById("contenido")
    );
}
