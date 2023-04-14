function Billing() {
    return ( 
        <>
        < div class = "container-fluid" >
        <h1> VENTAS </h1> 
        </div>
          <form className="form">
            <div className="card-body py-0">
              <div className="form-group row">
                <div className="col-12">
                  <label>Producto</label>
                    <input
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-lg-4">
                  <label>Cantidad</label>
                  <input
                    type="text"
                    className="form-control"
                  />

                </div>
                <div className="col-lg-4">
                  <label>Precio:</label>
                    <input
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-4">
                  <label>Descuento:</label>
                  <input
                    type="text"
                    className="form-control"                       
                  />
            </div>
            <div className="row pl-8 pb-8">
              <div className="col-lg-12 text-left">
              <input
                  type="submit"
                  className="btn btn-primary"
                  value="Agregar +"
                />
              </div>
            </div>
            </div>
            </div>
          </form>
            <div className="container top-0 left-0 right-0">
              <div className="row justify-content-center">
                <div className="col-md-9">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr className="font-weight-boldest h-65px">
                          <td className="align-middle font-size-h4 pl-0 border-0">
                            PRODUCTO
                          </td>
                          <td className="align-middle font-size-h4 text-right border-0">
                            CANTIDAD
                          </td>
                          <td className="align-middle font-size-h4 text-right border-0">
                            PRECIO
                          </td>
                          <td className="align-middle font-size-h4 text-right pr-0 border-0">
                            SUBTOTAL
                          </td>
                          <td className="align-middle font-size-h4 text-right pr-0 border-0"></td>
                        </tr>
                      </thead>
                      <tbody>
                          <tr
                            className="font-size-lg font-weight-bolder h-65px"
                          >
                            <td className="align-middle pl-0 border-0">
                            </td>
                            <td className="align-middle text-center border-0">
                            </td>
                            <td className="align-middle text-center border-0">
                            </td>
                            <td className="align-middle text-center text-danger font-weight-boldest font-size-h5 pr-0 border-0">
                            </td>
                            <td className="align-middle text-right text-danger font-weight-boldest font-size-h5 pr-0 border-0">
                              <button
                                type="button"
                                className="btn btn-danger"
                              >
                                Quitar
                              </button>
                            </td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center px-8">
                <div className="col-md-9">
                  <div
                    className="rounded d-flex align-items-center justify-content-between text-white max-w-425px position-relative ml-auto px-7 py-5 bgi-no-repeat bgi-size-cover bgi-position-center bg-primary"
                  >
                    <div className="font-weight-boldest font-size-h6" >
                      TOTAL
                    </div>
                    <div className="text-right d-flex flex-column">

                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
}
export default Billing