import { useState } from "react";
import SubmitBtn from "./SubmitBtn";

const Form = ({ name, password, setName, setPassword, setError, setData }) => {
  const [buttonOn, setButtonOn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonOn(false);

    if (name === "" || !isNaN(name)) {
      setError(true);
      return;
    } else {
      setData(true);
      setError(false);
    }
  };

  const handleReset = () => {
    setName("");
    setPassword("");
    setButtonOn(false);
    setData(false);
    setError(false);
  };

  const renderButton = (e) => {
    if (e.target.value === "252525" && e.target.id === "inptPass") {
      setButtonOn(true);
      return;
    }
    setButtonOn(false);
    setData(false);
  };

  return (
    <form
      action=""
      className="d-flex flex-column align-items-center p-4"
      onChange={renderButton}
    >
      <div className="d-flex flex-column input-group input-group-lg d-flex p-3 justify-content-center align-items-center">
        <div className="d-flex flex-row">
          <span className="input-group-text">Nombre</span>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <span className="input-group-text">Password</span>
          <input
            type="Password"
            className="form-control"
            value={password}
            id="inptPass"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {buttonOn ? (<SubmitBtn clase="w-50 btn btn-success my-3" handleSubmit={handleSubmit}/>) : null}
      <button
        className="w-50 btn btn-secondary my-3 "
        type="reset"
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
};

export default Form;
