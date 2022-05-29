export const GramaticaSubtemas = ({gramatica}) => {
  return (
    <>
      <div className='mt-2' id='information__gramatica'>
        <h3 className="col-12 fw-bold m-0">{gramatica.simboloTitulo}: </h3>
        <p className="col-12 fs-4 ">{gramatica.simboloTexto}</p>
      </div>
      <div className='mt-2' id="information__gramatica">
        <h3 className="col-12 fw-bold m-0">{gramatica.vocabularioTitulo}: </h3>
        <p className="col-12 fs-4 ">{gramatica.vocabularioTexto}</p>
      </div>
      <div className='mt-2' id="information__gramatica">
        <h3 className="col-12 fw-bold m-0">{gramatica.cadenaTitulo}: </h3>
        <p className="col-12 fs-4 ">{gramatica.cadenaTexto}</p>
      </div>
      <div className='mt-2' id="information__gramatica">
        <h3 className="col-12 fw-bold m-0">{gramatica.longitudTitulo}: </h3>
        <p className="col-12 fs-4 ">{gramatica.longitudTexto}</p>
      </div>
      <div className='mt-2' id="information__gramatica">
        <h3 className="col-12 fw-bold m-0">{gramatica.cadenaVaciaTitulo}: </h3>
        <p className="col-12 fs-4 ">{gramatica.cadenaVaciaTexto}</p>
      </div>
      <div className='mt-2' id="information__gramatica">
        <h3 className="col-12 fw-bold m-0">{gramatica.concatenacionCadenasTitulo}: </h3>
        <p className="col-12 fs-4 ">{gramatica.concatenacionCadenasTexto}</p>
      </div>
      <div className='mt-2' id="information__gramatica">
        <h3 className="col-12 fw-bold m-0">{gramatica.universoDelDiscursoTitulo}: </h3>
        <p className="col-12 fs-4 ">{gramatica.universoDelDiscursoTexto}</p>
      </div>
      <div className='mt-2' id="information__gramatica">
        <h3 className="col-12 fw-bold m-0">{gramatica.gramaticaTitulo}: </h3>
        <p className="col-12 fs-4 ">{gramatica.gramaticaTexto}</p>
      </div>
      <div className='mt-2' id="information__gramatica">
        <h3 className="col-12 fw-bold m-0">{gramatica.automataTitulo}: </h3>
        <p className="col-12 fs-4 ">{gramatica.automataTexto}</p>
      </div>
      <div className='mt-2' id="information__gramatica">
        <h3 className="col-12 fw-bold m-0">{gramatica.lenguajeTitulo}: </h3>
        <p className="col-12 fs-4 ">{gramatica.lenguajeTexto}</p>
      </div>
    </>
  )
}
