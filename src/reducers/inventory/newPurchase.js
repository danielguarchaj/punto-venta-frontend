import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SERVICES } from "../../utils/services";
import { formatDateForBackend } from "../../helpers/converters";
import {
  toastSavingNewPurchase,
  toastSavedNewPurchase,
  toastErrorNewPurchase,
  toastInstance,
} from "../../helpers/toasts";

const initialState = {
  purchaseForm: {
    productId: null,
    quantity: "",
    price: "",
    expirationDate: "",
    productLabel: "Selecciona un producto",
  },
  purchaseList: [],
  total: 0,
  saveNewPurchaseStatus: "loading" | "failed" | "succeeded",
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
  extraReducers(builder) {
    builder
      .addCase(saveNewPurchase.pending, (state) => {
        state.saveNewPurchaseStatus = "loading";
        toastSavingNewPurchase();
      })
      .addCase(saveNewPurchase.fulfilled, (state, { payload: { status } }) => {
        toastInstance.dismiss(toastSavingNewPurchase);
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
        toastInstance.dismiss(toastSavingNewPurchase);
        state.saveNewPurchaseStatus = "failed";
        toastErrorNewPurchase();
      });
  },
});

export const {
  setPurchaseFormField,
  addProductToList,
  removeProductFromList,
  resetPurchase,
} = newPurchase.actions;
export default newPurchase.reducer;

export const saveNewPurchase = createAsyncThunk(
  "inventory/saveNewPurchase",
  async ({ purchaseList, token }) => {
    console.log(token);
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
);
