import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import { getProducts } from "../../reducers/inventory";
import { getCustomers } from "../../reducers/customers";
import { setSaleFormField } from "../../reducers/inventory/newSale";
import { isDecimal } from "../../helpers/validators";

function Billing() {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getProducts({ token }));
    dispatch(getCustomers({ token }));
  }, [dispatch, token]);

  const { products } = useSelector((state) => state.inventory);
  const { customers } = useSelector((state) => state.customers);
  const {
    saleForm: { productId, quantity, customerId, productLabel, customerLabel },
    /* purchaseList,
    total,
    saveNewPurchaseStatus,
    */
  } = useSelector((state) => state.newSale);
  const invalidQuantity = !isDecimal(quantity);
  const selectProductPersistedState = {
    value: productId,
    label: productLabel,
  };

  const selectCustomerPersistedState = {
    value: customerId,
    label: customerLabel,
  };
  const selectProductInitialState = {
    value: null,
    label: "Selecciona un producto",
  };
  const selectCustomerInitialState = {
    value: null,
    label: "Selecciona cliente",
  };

  const [selectedProductValue, setSelectedProductValue] = useState(
    selectProductPersistedState
  );
  const [selectedCustomerValue, setSelectedCustomerValue] = useState(
    selectCustomerPersistedState
  );

  const optionsProduct = products.map((product) => ({
    value: product.id,
    label: `${product.name} - ${product.description} - ${product.brand.name} - ${product.category.name}`,
  }));

  const optionsCustomer = customers.map((customer) => ({
    value: customer.id,
    label: `${customer.first_name} ${customer.last_name} - ${customer.nit}`,
  }));

  const handleUpdateInput = (field, value) => {
    dispatch(setSaleFormField({ field, value }));
  };

  return (
    <>
      <div className="container-fluid">
        <h1> VENTAS </h1>
      </div>
      <form className="form">
        <div className="card-body py-0">
          <div className="form-group row">
            <div className="col-12">
              <label>Producto</label>
              <Select
                key={`my_unique_select_key__${productId}`}
                options={optionsProduct}
                onChange={(choice) => {
                  handleUpdateInput("productId", choice.value);
                  handleUpdateInput("productLabel", choice.label);
                  setSelectedProductValue({
                    value: choice.value,
                    label: choice.label,
                  });
                }}
                value={selectedProductValue}
              />
              {!productId && (
                <div className="invalid-feedback d-block">
                  Selecciona un producto
                </div>
              )}
            </div>
          </div>
          <div className="form-group row">
            <div className="col-lg-6">
              <label>Cliente</label>
              <Select
                key={`my_unique_select_customer_key_${customerId}`}
                options={optionsCustomer}
                onChange={(choice) => {
                  handleUpdateInput("customerId", choice.value);
                  handleUpdateInput("customerLabel", choice.label);
                  setSelectedCustomerValue({
                    value: choice.value,
                    label: choice.label,
                  });
                }}
                value={selectedCustomerValue}
              />
              {!customerId && (
                <div className="invalid-feedback d-block">
                  Selecciona un cliente
                </div>
              )}
            </div>
            <div className="col-lg-6">
              <label>Cantidad</label>
              <input
                type="text"
                className={`form-control ${
                  invalidQuantity ? "is-invalid" : "is-valid"
                }`}
                placeholder="Ingresa la cantidad"
                onChange={(e) => handleUpdateInput("quantity", e.target.value)}
                value={quantity}
              />
              <div className="invalid-feedback">Ingrese un monto valido</div>
            </div>
          </div>
        </div>
        <div className="row pl-8 pb-8">
              <div className="col-lg-12 text-left">
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Agregar +"
                  disabled
                />
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
                  <tr className="font-size-lg font-weight-bolder h-65px">
                    <td className="align-middle pl-0 border-0"></td>
                    <td className="align-middle text-center border-0"></td>
                    <td className="align-middle text-center border-0"></td>
                    <td className="align-middle text-center text-danger font-weight-boldest font-size-h5 pr-0 border-0"></td>
                    <td className="align-middle text-right text-danger font-weight-boldest font-size-h5 pr-0 border-0">
                      <button type="button" className="btn btn-danger" disabled> 
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
            <div className="rounded d-flex align-items-center justify-content-between text-white max-w-425px position-relative ml-auto px-7 py-5 bgi-no-repeat bgi-size-cover bgi-position-center btn btn-success">
              <div className="font-weight-boldest font-size-h6">TOTAL</div>
              <div className="text-right d-flex flex-column"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center py-8 px-8 px-md-0">
          <div className="col-md-9">
            <div className="d-flex font-size-sm flex-wrap">
              <button
                type="button"
                className="btn btn-light-danger font-weight-bolder mr-3 my-1 px-7"
                disabled
              >
                Limpiar lista
              </button>
              <button
                type="button"
                className="btn btn-success font-weight-bolder ml-sm-auto my-1 px-7"
                disabled
              >
                Guardar lista
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Billing;
