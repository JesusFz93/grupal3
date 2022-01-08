import React, { useEffect, useState } from "react";

export const Tabla = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((resultado) => setLista(resultado));
  }, []);

  const [lista, setLista] = useState([]);

  const editItem = (name, username, mail) => {
    console.log(name);
    console.log(username);
    console.log(mail);
  };

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
            <>
              <tr>
                <td key={x.id}>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.username}</td>
                <td>{x.email}</td>
                <td>
                  <a
                    href="#"
                    onClick={() =>
                      editItem(x.name, x.username, x.email)
                    }
                    className="btn btn-primary"
                  >
                    Editar
                  </a>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};
