import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { getProducts } from "../../reducers/inventory";
import {
  setPurchaseFormField,
  addProductToList,
  removeProductFromList,
  resetPurchase,
} from "../../reducers/inventory/newPurchase";
import { isDecimal } from "../../helpers/validators";

import imageAb7 from "../../assets/theme/media/svg/shapes/abstract-7.svg";
import imageAb9 from "../../assets/theme/media/svg/shapes/abstract-9.svg";
import moment from "moment";

function Purchase() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products } = useSelector((state) => state.inventory);
  const {
    purchaseForm: { productId, quantity, price, expirationDate },
    purchaseList,
    total,
  } = useSelector((state) => state.newPurchase);

  const options = products.map((product) => ({
    value: product.id,
    label: `${product.name} - ${product.description} - ${product.brand.name} - ${product.category.name}`,
  }));

  const handleUpdateInput = (field, value) => {
    dispatch(setPurchaseFormField({ field, value }));
  };

  const expirationDateValid = expirationDate
    ? moment(expirationDate, "D/M/YYYY", true).isValid()
    : true;

  const invalidQuantity = !isDecimal(quantity);
  const invalidPrice = !isDecimal(price);

  const disableAddProduct =
    !productId || invalidQuantity || invalidPrice || !expirationDateValid;

  const handleAddProduct = (e) => {
    e.preventDefault();
    dispatch(addProductToList());
  };

  const handleRemoveProduct = (index) => {
    dispatch(removeProductFromList({ index }));
  };

  return (
    <div className="card card-custom">
      <div className="card-body p-0">
        <div className="container">
          <div className="card card-custom card-shadowless">
            <div className="card-body p-0">
              <div className="row justify-content-left py-2 px-2 py-md-8 px-md-0">
                <div className="col-md-9">
                  <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
                    <h1 className="display-3 font-weight-boldest order-1 order-md-2 mb-5 mb-md-0">
                      Nueva compra
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="form" onSubmit={(e) => handleAddProduct(e)}>
          <div className="card-body py-0">
            <div className="form-group row">
              <div className="col-12">
                <label>Producto</label>
                <Select
                  options={options}
                  onChange={(choice) => {
                    handleUpdateInput("productId", choice.value);
                    handleUpdateInput("productLabel", choice.label);
                  }}
                />
                {!productId && (
                  <div className="invalid-feedback d-block">
                    Selecciona un producto
                  </div>
                )}
              </div>
            </div>
            <div className="form-group row">
              <div className="col-lg-4">
                <label>Cantidad</label>
                <input
                  type="text"
                  className={`form-control ${
                    invalidQuantity ? "is-invalid" : "is-valid"
                  }`}
                  placeholder="Ingresa la cantidad"
                  name="purchaseDateTo"
                  onChange={(e) =>
                    handleUpdateInput("quantity", e.target.value)
                  }
                  value={quantity}
                />
                <div className="invalid-feedback">Ingrese un monto valido</div>
              </div>
              <div className="col-lg-4">
                <label>Precio:</label>
                <input
                  type="text"
                  className={`form-control ${
                    invalidPrice ? "is-invalid" : "is-valid"
                  }`}
                  placeholder="Ingresa el precio"
                  name="price"
                  onChange={(e) => handleUpdateInput("price", e.target.value)}
                  value={price}
                />
                <div className="invalid-feedback">Ingrese un monto valido</div>
              </div>
              <div className="col-lg-4">
                <label>Fecha de vencimiento:</label>
                <input
                  type="text"
                  className={`form-control ${
                    expirationDateValid ? "is-valid" : "is-invalid"
                  }`}
                  placeholder="Ingresa la fecha de vencimiento"
                  name="expirationDate"
                  onChange={(e) =>
                    handleUpdateInput("expirationDate", e.target.value)
                  }
                  value={expirationDate}
                />
                <div className="invalid-feedback">
                  La fecha debe estar en formato DD/MM/AAAA
                </div>
              </div>
            </div>
          </div>
          <div className="row pl-8 pb-8">
            <div className="col-lg-12 text-left">
              <input
                type="submit"
                className="btn btn-success"
                value="Agregar +"
                disabled={disableAddProduct}
              />
            </div>
          </div>
        </form>
        <div className="position-relative">
          <div
            className="bgi-size-cover bgi-position-center bgi-no-repeat h-65px"
            style={{ backgroundImage: `url(${imageAb7})` }}
          ></div>
          <div className="bg-white h-65px"></div>
          <div className="bg-light h-65px"></div>
          <div className="bg-white h-65px"></div>
          <div className="bg-light h-65px"></div>
          <div className="container position-absolute top-0 left-0 right-0">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr className="font-weight-boldest text-white h-65px">
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
                      {purchaseList.map((product, index) => (
                        <tr
                          className="font-size-lg font-weight-bolder h-65px"
                          key={index}
                        >
                          <td className="align-middle pl-0 border-0">
                            {product.productLabel}
                          </td>
                          <td className="align-middle text-center border-0">
                            {product.quantity}
                          </td>
                          <td className="align-middle text-center border-0">
                            {product.price}
                          </td>
                          <td className="align-middle text-center text-danger font-weight-boldest font-size-h5 pr-0 border-0">
                            {Number(product.price) * Number(product.quantity)}
                          </td>
                          <td className="align-middle text-right text-danger font-weight-boldest font-size-h5 pr-0 border-0">
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => handleRemoveProduct(index)}
                            >
                              Quitar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center pt-25 pb-20">
              <div className="col-md-9">
                <div
                  className="rounded d-flex align-items-center justify-content-between text-white max-w-425px position-relative ml-auto px-7 py-5 bgi-no-repeat bgi-size-cover bgi-position-center"
                  style={{ backgroundImage: `url(${imageAb9})` }}
                >
                  <div className="font-weight-boldest font-size-h5">TOTAL</div>
                  <div className="text-right d-flex flex-column">
                    <span className="font-weight-boldest font-size-h3 line-height-sm">
                      Q{total}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center py-8 px-8 py-md-28 px-md-0">
            <div className="col-md-9">
              <div className="d-flex font-size-sm flex-wrap">
                <button
                  type="button"
                  className="btn btn-light-danger font-weight-bolder mr-3 my-1 px-7"
                  onClick={() => dispatch(resetPurchase())}
                >
                  Limpiar lista
                </button>
                <button
                  type="button"
                  className="btn btn-success font-weight-bolder ml-sm-auto my-1 px-7"
                >
                  Guardar compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
