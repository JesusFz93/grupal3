import React, { useEffect, useState } from "react";

export const SearchBar = ({ func }) => {
  const [valorBusqueda, setValorBusqueda] = useState("");
  useEffect(() => {
    if (valorBusqueda === "") {
      return;
    }
    func(valorBusqueda);
  }, [func, valorBusqueda]);

  return (
    <>
      <section className="row">
        <article className="col">
          <input
            type="text"
            placeholder="Busca algun usuario"
            className="form-control"
            onChange={(e) => setValorBusqueda(e.target.value)}
          />
        </article>
      </section>
    </>
  );
};
