import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SERVICES } from "../../utils/services";
//import { formatDateForBackend } from "../../helpers/converters";
import {
    toastSavingNewPurchase,
    toastSavedNewPurchase,
    toastErrorNewPurchase,
    toastInstance,
} from "../../helpers/toasts";

const initialState = {
    saleForm: {
        productId: null,
        quantity: "",
        customerId: null,
        productLabel: "Selecciona un producto",
        customerLabel: "Selecciona un cliente",
    },
    saleList: [],
    total: 0,
    saveNewSaleStatus: "loading" | "failed" | "succeeded",
};

export const newSale = createSlice({
    name: "newSale",
    initialState,
    reducers: {
        /*actualiza el state desde el metodo onChange*/
        setSaleFormField: (state, { payload: { field, value } }) => {
            console.log(field, value)
            state.saleForm[field] = value;
            console.log(state.saleForm[field])
        },
        /* addProductToList: (state) => {
              state.purchaseList.push({
                ...state.purchaseForm,
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
            },*/
    },
    /* extraReducers(builder) {
        builder
          .addCase(saveNewPurchase.pending, (state) => {
            state.saveNewPurchaseStatus = "loading";
            toastSavingNewPurchase();
          })
          .addCase(saveNewPurchase.fulfilled, (state, { payload: { status } }) => {
            toastInstance.dismiss();
            if (status === 200) {
              state.saveNewPurchaseStatus = "succeeded";
              state.purchaseForm = initialState.purchaseForm;
              state.purchaseList = initialState.purchaseList;
              state.total = initialState.total;
              toastSavedNewPurchase();
              return;
            }
            state.saveNewPurchaseStatus = "failed";
            toastErrorNewPurchase();
          })
          .addCase(saveNewPurchase.rejected, (state) => {
            state.saveNewPurchaseStatus = "failed";
            toastErrorNewPurchase();
          });
      },*/
});

export const {
    setSaleFormField,
    /*  addProductToList,
      removeProductFromList,
      resetPurchase,*/
} = newSale.actions;
export default newSale.reducer;

/*export const saveNewPurchase = createAsyncThunk(
  "inventory/saveNewPurchase",
  async ({ purchaseList, token }) => {
    const { inventory, baseUrl } = SERVICES;
    const response = await fetch(`${baseUrl}${inventory.saveNewPurchase}`, {
      method: "POST",
      body: JSON.stringify(purchaseList),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    });
    return { status: response.status };
  }
);*/