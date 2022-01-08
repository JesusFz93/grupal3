import React from "react";
import { Title } from "../components/Title";
import { Tabla } from "../components/Tabla";

export const HomePage = () => {
  return (
    <>
      <Title titulo="Tabla de elementos" />
      <Tabla />
    </>
  );
};
