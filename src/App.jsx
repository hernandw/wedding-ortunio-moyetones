import './App.css'

const App = () => {
  return (
    <div className="pt-40">
      <div className="acceso">
        <p className="p-4">
          por favor ingresa el código que se te entregó en la invitación
        </p>
        <form className="flex flex-col">
          <input
            className="form-control w-full px-3 py-1.5 text-gray-700 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            type="text"
            placeholder="Ingresa el código"
          />
          <button className="mt-6 text-white bg-blue-500 rounded hover:bg-blue-800 pointer">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App
