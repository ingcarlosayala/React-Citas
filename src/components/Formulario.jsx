import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente,setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){

      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }

  }, [paciente])
  

  //Funcion gnerarId
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  //Metodo Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de Formulario
    if ([nombre,propietario,email,fecha,sintomas].includes('')) {
      setError(true);
      return;
    }else{
      setError(false);
    }

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if (paciente.id) {
      //Editar el Registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizado = pacientes.map( (pacienteState) => pacienteState.id === 
           paciente.id ? objetoPaciente : pacienteState
      )

      setPacientes(pacientesActualizado);
      setPaciente({});

    }else{
      //Agregar Registro
      objetoPaciente.id = generarId();
      setPacientes([objetoPaciente, ...pacientes]);
    }

    //Reiniciar el Formulaario
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>

      <p className="text-center text-lg mt-3">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form onSubmit={handleSubmit}
           className="bg-white shadow-lg py-10 px-5 rounded-lg mt-5 mb-10 mx-5 lg:mx-0"
      >
        { error && <Error> <p>Todo Los Campos son requeridos</p> </Error>}
        <div className="mb-2">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>

          <input id="mascota"
                 type="text"
                 placeholder="Nombre de la mascota" 
                 className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
                 value={nombre}
                 onChange={ (e) => setNombre(e.target.value) }/>
        </div>

        <div className="mb-2">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>

          <input id="propietario"
                 type="text"
                 placeholder="Nombre del Propietario" 
                 className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
                 value={propietario}
                 onChange={ (e) => setPropietario(e.target.value) }/>
        </div>

        <div className="mb-2">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>

          <input id="email"
                 type="email"
                 placeholder="Email" 
                 className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
                 value={email}
                 onChange={ (e) => setEmail(e.target.value) }/>
        </div>

        <div className="mb-2">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>

          <input id="alta"
                 type="date"
                 placeholder="Email" 
                 className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
                 value={fecha}
                 onChange={ (e) => setFecha(e.target.value) }/>
        </div>

        <div className="mb-2">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>

          <textarea 
                  id="sintomas"
                  className="border-2 p-2 w-full mt-2 placeholder-gray-400 rounded-md"
                  placeholder="Describe los Sintomas"
                  value={sintomas}
                  onChange={ (e) => setSintomas(e.target.value) }
          />
        </div>
      
        <input 
              type="submit"
              className="bg-indigo-600 w-full p-3 mt-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-all"
              value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' }
        />
      </form>
    </div>
  )
}

export default Formulario