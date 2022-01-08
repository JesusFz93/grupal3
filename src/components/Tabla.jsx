import React, { useEffect, useState } from "react";
import { Formulario } from "./Formulario";

export const Tabla = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((resultado) => setLista(resultado));
  }, []);

  const [lista, setLista] = useState([]);
  let formu = <Formulario />;

  const editItem = (name, username, mail) => {
    console.log(name);
    console.log(username);
    console.log(mail);

    formu = <Formulario nombre={name} usuario={username} correo={mail} />;
  };

  // nombre, usuario, correo

  return (
    <div className="container">
      <table className="table" id="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Usuario</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((x) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
              <td>{x.username}</td>
              <td>{x.email}</td>
              <td>
                <button
                  type="button"
                  onClick={() => editItem(x.name, x.username, x.email)}
                  className="btn btn-primary"
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {formu}
    </div>
  );
};
