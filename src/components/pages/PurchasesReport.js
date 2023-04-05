import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilterField as setPurchaseReportField,
  getPurchases,
} from "../../reducers/reports/purchases";

function PurchasesReport() {
  const {
    filterFields: { username, purchaseDateFrom, purchaseDateTo },
    purchases,
  } = useSelector((state) => state.purchasesReports);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = [
      {
        filterField: "user__username__icontains",
        filterValue: username,
      },
      {
        filterField: "purchase_date_after",
        filterValue: purchaseDateFrom,
      },
      {
        filterField: "purchase_date_before",
        filterValue: purchaseDateTo,
      },
    ];
    dispatch(getPurchases(filters));
  };

  const handleUpdateInput = ({ target: { value, name } }) => {
    dispatch(setPurchaseReportField({ field: name, value }));
  };

  return (
    <div className="card card-body">
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="card-body">
          <div className="form-group row">
            <div className="col-lg-4">
              <label>Fecha compra desde:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Filtrar compras desde esta fecha"
                name="purchaseDateFrom"
                onChange={(e) => handleUpdateInput(e)}
                value={purchaseDateFrom}
              />
            </div>
            <div className="col-lg-4">
              <label>Fecha compra hasta:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Filtrar compras hasta esta fecha"
                name="purchaseDateTo"
                onChange={(e) => handleUpdateInput(e)}
                value={purchaseDateTo}
              />
            </div>
            <div className="col-lg-4">
              <label>Encargado:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Filtrar nombre de usuario del encargado"
                name="username"
                onChange={(e) => handleUpdateInput(e)}
                value={username}
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-lg-12 text-left">
              <input
                type="submit"
                className="btn btn-success"
                value="Consultar"
              />
            </div>
          </div>
        </div>
      </form>
      <div class="row">
        <div class="col-xl-12">
          <div class="card card-custom card-stretch gutter-b">
            <div class="card-header border-0">
              <h3 class="card-title font-weight-bolder text-dark">
                Resultados
              </h3>
            </div>
            <div class="card-body pt-0">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Fecha de compra</th>
                    <th scope="col">Encargado</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {purchases.map((purchase) => (
                    <tr key={purchase.id}>
                      <th scope="row">{purchase.id}</th>
                      <td>{purchase.purchase_date}</td>
                      <td>{purchase.user.username}</td>
                      <td>{purchase.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchasesReport;
