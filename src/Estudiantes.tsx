import './Estudiantes.css'

function Estudiantes() {

  return (
      <div className='card'>
      <h2>Estudiantes</h2>
      <div className='table'>
        <table>
          <thead>
              <tr>
                <th>Nombre</th>
                <th>Cargo</th>
                <th>Puntaje</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                <td>Marco Sastoque</td>
                <td>Software engineer III</td>
                <td>5.0</td>
              </tr>
              <tr>
                <td>Juan Perez</td>
                <td>Software engineer III</td>
                <td>5.0</td>
              </tr>
              <tr>
                <td>Juana Ortiz</td>
                <td>Software engineer III</td>
                <td>4.5</td>
              </tr>
          </tbody>
        </table>
      </div>
      </div>
  )
}

export default Estudiantes
