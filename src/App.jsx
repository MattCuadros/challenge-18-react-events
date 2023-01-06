import { useState } from "react";

const App = () => {

  const [password, setPassword]=useState("");
  const [buttonOn, setButtonOn]=useState(false);
  

 const renderButton=(e)=>{
 
  if(password===252525){
    console.log("entre al if de renderButton");
    setButtonOn(true);
    return;
  }
 }


  return (
    <div className="d-flex flex-column align-items-center w-100 p-3 border border-dark rounded-pill bg-white mt-3 ">
      <h1>Desafío Eventos con React+Vite</h1>
      <form action="" className="d-flex flex-column align-items-center p-4" onChange={renderButton}>
        <div className="d-flex flex-column input-group input-group-lg d-flex p-3 justify-content-center align-items-center">
          <div className="d-flex flex-row">
            <span className="input-group-text">Nombre</span>
            <input type="text" className="form-control" />
            <span className="input-group-text">Password</span>
            <input type="Password" className="form-control" value={password} id="inptPass" onChange= {(e)=>(setPassword(e.target.value))}/>
          </div>
        </div>
        {buttonOn?<button className="w-50 btn btn-success my-3 " type="submit">Enviar</button>:null}
        <button className="w-50 btn btn-secondary my-3 " type="reset">Reset</button>
      </form>
    </div>
  );
};

export default App;
