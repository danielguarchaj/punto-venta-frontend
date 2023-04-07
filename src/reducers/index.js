import { combineReducers } from "redux";
import authReducer from "./auth";
import purchasesReportReducer from "./reports/purchases";
import inventoryReducer from "./inventory";
import newPurchaseReducer from "./inventory/newPurchase";

const rootReducer = combineReducers({
  auth: authReducer,
  purchasesReports: purchasesReportReducer,
  inventory: inventoryReducer,
  newPurchase: newPurchaseReducer,
});

export default rootReducer;
