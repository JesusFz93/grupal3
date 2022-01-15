import React, { useEffect, useState } from "react";
import { Formulario } from "./Formulario";
import { SearchBar } from "./SearchBar";

const initialState = {
  name: "",
  username: "",
  mail: "",
};

export const Tabla = () => {
  const [obj, setObj] = useState(initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((resultado) => setLista(resultado));
  }, []);

  const [lista, setLista] = useState([]);

  const [valorBusqueda, setValorBusqueda] = useState("");

  const editItem = (name, username, mail) => {
    const objeto = {
      name,
      username,
      mail,
    };

    setObj(objeto);
  };

  const pull_info = (data) => {
    setValorBusqueda(data);
  };

  return (
    <div className="container">
      <SearchBar func={pull_info} />
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
          {lista
            .filter(
              (item) =>
                item.name.toLowerCase().includes(valorBusqueda.toLowerCase()) ||
                item.username
                  .toLowerCase()
                  .includes(valorBusqueda.toLowerCase()) ||
                item.email.toLowerCase().includes(valorBusqueda.toLowerCase())
            )
            .map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.username}</td>
                <td>{x.email}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => editItem(x.name, x.username, x.email)}
                    className="btn btn-warning"
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Formulario obj={obj} />
    </div>
  );
};
