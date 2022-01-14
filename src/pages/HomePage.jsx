import React from "react";
import { Title } from "../components/Title";
import { Tabla } from "../components/Tabla";

export const HomePage = () => {
  return (
    <>
      <Title titulo="Tabla de usuarios" />
      <Tabla />
      {/* <Formulario nombre="jose" usuario="jal" correo="ss" /> */}
    </>
  );
};
