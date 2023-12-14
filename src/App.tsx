import indraLogo from './assets/indra.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar.tsx'
import { useState } from 'react';
import UserInfo from './UserInfo.tsx';
import Estudiantes from './Estudiantes.tsx';
import Multimedia from './Multimedia.tsx';
import Somos from './Somos.tsx';
import Objetivos from './Objetivos.tsx';
import Contacto from './Contacto.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={indraLogo} className="logo" alt="React logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h2>React/Vite | Tu talento nos inspira</h2>
      
      <hr></hr>
      <br></br>

      <div className='term'>
        <NavBar/>
        <div className='term2'>
          <Somos></Somos>
          <Objetivos></Objetivos>
          <Multimedia></Multimedia>
          <Estudiantes></Estudiantes>
          <UserInfo></UserInfo>
          <Contacto></Contacto>
        </div>
      </div>


      

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador: {count}
        </button>
        <p>
          Visita nuestra página web <code>https://www.indraweb.net/</code> para más información
        </p>
      </div>
    </>
  )
}

export default App
