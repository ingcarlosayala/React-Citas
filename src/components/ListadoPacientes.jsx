import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      { pacientes && pacientes.length === 0 ?
        (
          <>
            <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
            <p className="text-center text-lg mt-3">
              Comienza Agregar Pacientes {''}
              <span className="text-indigo-600 font-bold">y Apareceran en Este Lugar</span>
            </p>
          </>
        ):(
          <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-center text-lg mt-3">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
          </>
        )
      }

        {
          pacientes.map( (paciente) => {
            return <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                    />
          } )
        }

    </div>
  )
}

export default ListadoPacientes