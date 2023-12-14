import './UserInfo.css'

function UserInfo() {

  return (
      <div className="card">
        <h2>Usuario</h2>
        <form>
          <fieldset>
            <legend>Inscribir estudiante</legend>
            <label >Nombre</label><br/>
            <input name="name" id="name"/><br/>
            <label >Apellido</label><br/>
            <input name="apellido" id="apellido"/><br/>
            <label >Identificación</label><br/>
            <input name="identificacion" id="identificacion"/><br/>
            <label >Fecha de nacimiento</label><br/>
            <input name="dob" type='date'></input>
            <br></br>
            <br></br>
            <input type="submit"></input>
          </fieldset>
        </form>
      </div>
  )
}

export default UserInfo
