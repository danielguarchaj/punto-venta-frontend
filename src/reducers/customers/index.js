import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SERVICES } from "../../utils/services";

const initialState = {
    customers: [],
    customersRequestStatus: "loading" | "failed" | "succeeded",
};

export const customers = createSlice({
    name: "customers",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCustomers.pending, (state) => {
                state.customersRequestStatus = "loading";
            })
            .addCase(
                getCustomers.fulfilled,
                (state, { payload: { status, customers } }) => {
                    if (status === 200) {
                        state.customersRequestStatus = "succeeded";
                        state.customers = customers;
                        return;
                    }
                    state.customersRequestStatus = "failed";
                }
            )
            .addCase(getCustomers.rejected, (state) => {
                state.customersRequestStatus = "failed";
            });
    },
});

export default customers.reducer;

export const getCustomers = createAsyncThunk(
    "customers/getCustomers",
    async({ token }) => {
        const { customers, baseUrl } = SERVICES;
        const response = await fetch(`${baseUrl}${customers.list}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return { customers: data, status: response.status };
    }
);