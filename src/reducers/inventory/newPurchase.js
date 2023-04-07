import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SERVICES } from "../../utils/services";
import { formatDateForBackend } from "../../helpers/converters";

const initialState = {
  purchaseForm: {
    productId: null,
    quantity: "",
    price: "",
    expirationDate: "",
    productLabel: "",
  },
  purchaseList: [],
  total: 0,
};

export const newPurchase = createSlice({
  name: "newPurchase",
  initialState,
  reducers: {
    setPurchaseFormField: (state, { payload: { field, value } }) => {
      state.purchaseForm[field] = value;
    },
    addProductToList: (state) => {
      state.purchaseList.push({
        ...state.purchaseForm,
        expirationDate: formatDateForBackend(state.purchaseForm.expirationDate),
      });
      state.total +=
        Number(state.purchaseForm.price) * Number(state.purchaseForm.quantity);
      state.purchaseForm = initialState.purchaseForm;
    },
    removeProductFromList: (state, { payload: { index } }) => {
      state.total -=
        Number(state.purchaseList[index].price) *
        Number(state.purchaseList[index].quantity);
      state.purchaseList.splice(index, 1);
    },
    resetPurchase: (state) => {
      state.purchaseForm = initialState.purchaseForm;
      state.purchaseList = initialState.purchaseList;
      state.total = initialState.total;
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(getProducts.pending, (state) => {
  //       state.productsRequestStatus = "loading";
  //       state.token = "";
  //     })
  //     .addCase(
  //       getProducts.fulfilled,
  //       (state, { payload: { status, products } }) => {
  //         if (status === 200) {
  //           state.productsRequestStatus = "succeeded";
  //           state.products = products;
  //           return;
  //         }
  //         state.productsRequestStatus = "failed";
  //       }
  //     )
  //     .addCase(getProducts.rejected, (state) => {
  //       state.productsRequestStatus = "failed";
  //     });
  // },
});

export const {
  setPurchaseFormField,
  addProductToList,
  removeProductFromList,
  resetPurchase,
} = newPurchase.actions;
export default newPurchase.reducer;

// export const getProducts = createAsyncThunk(
//   "inventory/getProducts",
//   async () => {
//     const { inventory, baseUrl } = SERVICES;
//     const response = await fetch(`${baseUrl}${inventory.getProducts}`);
//     const data = await response.json();
//     return { products: data, status: response.status };
//   }
// );
