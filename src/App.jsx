import { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="d-flex flex-column align-items-center w-100 p-5 border border-dark rounded-pill bg-white mt-3 ">
      <h1>Desafío Eventos con React+Vite</h1>
      {error ? (<h2 className="text-danger ">¡Debe ingresar un nombre!</h2>) : null}
      <Form
        name={name}
        password={password}
        setName={setName}
        setPassword={setPassword}
        setError={setError}
        setData={setData}
      />
      {data ? (<h2 className="text-center">Los datos ingresados son:<br /> Nombre:({name}) y Password:({password})</h2>):null}
    </div>
  );
};

export default App;
