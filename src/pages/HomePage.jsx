import React from "react";
import { Title } from "../components/Title";
import { Tabla } from "../components/Tabla";
import { Formulario } from "../components/Formulario";

export const HomePage = () => {
  return (
    <>
      <Title titulo="Tabla de elementos" />
      <Tabla />
      <Formulario nombre="jose" usuario="jal" correo="ss" />
    </>
  );
};
