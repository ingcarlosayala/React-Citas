import { useEffect } from "react";


const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const repuesta = confirm('Deseas eliminar este paciente');
    
    if (repuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg py-10 px-5 mt-5 mx-5">
        <p className="font-bold text-gray-700 uppercase mb-2">Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-2">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-2">Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-2">Fecha Alta: {''}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold text-gray-700 uppercase mb-2">Sintomas: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-5">
          <button type="button" 
          onClick={ () => setPaciente( paciente ) }
                  className="bg-indigo-600 hover:bg-indigo-700 uppercase
                  transition-all py-2 px-8 rounded shadow-md
                text-white font-bold">Editar
          </button>
          <button type="button"
                  onClick={ handleEliminar} 
                  className="bg-red-600 hover:bg-red-700 uppercase
                  transition-all  py-2 px-8 rounded shadow-md
                text-white font-bold">Eliminar
          </button>
        </div>
      </div>
  )
}

export default Paciente