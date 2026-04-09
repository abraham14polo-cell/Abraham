function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Mis Datos</h2>

      <table border="1" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Celular</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>TuNombre</td>
            <td>TuApellido</td>
            <td>correo@email.com</td>
            <td>123456789</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;