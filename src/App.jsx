import { useState } from 'react';
import Skill from './Skills';

function App() {
  // Tarea: Crear el array de habilidades
  const skills = ["Javascript", "jQuery", "Vue", "Angular", "React", "Node.js"];

  // Tarea: Añadir el estado showSkills (valor inicial false)
  const [showSkills, setShowSkills] = useState(false);

  // Función para manejar el clic (opcional, puedes ponerlo directo en el onClick)
  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Práctica: Estado en React</h1>

      {/* Tarea: Botón para mostrar u ocultar */}
      <button onClick={toggleSkills}>
        {showSkills ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
      </button>

      {/* Espaciador visual */}
      <div style={{ marginTop: '20px' }}>
        {/* Tarea: Componente que recibe el estado y el array por props */}
        <Skill array={skills} show={showSkills} />
      </div>
    </div>
  );
}

export default App;