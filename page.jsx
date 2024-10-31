import Link from "next/link";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa los estilos de Bootstrap si aún no están importados

async function getUsuarios() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const usuarios = await axios.get(url);
  return usuarios.data;
}

export default async function Usuarios() {
  const usuarios = await getUsuarios();

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Lista de Usuarios</h1>
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Nombre de Usuario</th>
            <th>Correo Electrónico</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user, i) => (
            <tr key={user.id}>
              <td>{i + 1}</td>
              <td>
                <Link href={`/usuarios/${user.id}`} legacyBehavior>
                  {user.name}
                </Link>
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
