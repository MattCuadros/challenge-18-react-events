const SubmitBtn=({clase, handleSubmit})=>{
    return(

        <button
          className={clase}
          type="submit"
          onClick={handleSubmit}
        >
          Enviar
        </button>
    )
}

export default SubmitBtn;