import { useState } from "react";

const App = () => {

  const [name, setName]=useState("")
  const [password, setPassword]=useState("");
  const [buttonOn, setButtonOn]=useState(false);
  const [data, setData]=useState(false);
  const [error, setError]=useState(false);
  
  

 const renderButton=(e)=>{
 
  if(e.target.value==="252525" && e.target.id==="inptPass"){
    setButtonOn(true);
    return;
  }
  setButtonOn(false);
  setData(false);
 }

 const handleSubmit=(e)=>{
  e.preventDefault();
  setButtonOn(false);
  

  if(name==="" || !isNaN(name)){
    setError(true);
    return;
  } else{ 
    setData(true);
    setError(false);
  }
 
 }

 const handleReset=()=>{
  setName("");
  setPassword("");
  setButtonOn(false);
  setData(false);
  setError(false);
 }


  return (
    <div className="d-flex flex-column align-items-center w-100 p-5 border border-dark rounded-pill bg-white mt-3 ">
      <h1>Desafío Eventos con React+Vite</h1>
      {error?<h2 className="text-danger ">¡Debe ingresar un nombre!</h2> :null}
      <form action="" className="d-flex flex-column align-items-center p-4" onChange={renderButton}>
        <div className="d-flex flex-column input-group input-group-lg d-flex p-3 justify-content-center align-items-center">
          <div className="d-flex flex-row">
            <span className="input-group-text">Nombre</span>
            <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <span className="input-group-text">Password</span>
            <input type="Password" className="form-control" value={password} id="inptPass" onChange= {(e)=>(setPassword(e.target.value))}/>
          </div>
        </div>
        {buttonOn?<button className="w-50 btn btn-success my-3 " type="submit" onClick={handleSubmit}>Enviar</button>:null}
        <button className="w-50 btn btn-secondary my-3 " type="reset" onClick={handleReset}>Reset</button>
      </form>
      {data?<h2 className="text-center">Los datos ingresados son:<br/> Nombre:({name}) y Password:({password})</h2>:null}
    </div>
  );
};

export default App;
