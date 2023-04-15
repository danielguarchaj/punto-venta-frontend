import { combineReducers } from "redux";
import authReducer from "./auth";
import purchasesReportReducer from "./reports/purchases";
import inventoryReducer from "./inventory";
import newPurchaseReducer from "./inventory/newPurchase";
import newSaleReducer from "./inventory/newSale";
import customersReducer from "./customers";


const rootReducer = combineReducers({
    auth: authReducer,
    purchasesReports: purchasesReportReducer,
    inventory: inventoryReducer,
    newPurchase: newPurchaseReducer,
    newSale: newSaleReducer,
    customers: customersReducer,
});

export default rootReducer;