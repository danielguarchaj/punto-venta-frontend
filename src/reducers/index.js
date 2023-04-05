import { combineReducers } from "redux";
import authReducer from "./auth";
import purchasesReportReducer from "./reports/purchases";

const rootReducer = combineReducers({
  auth: authReducer,
  purchasesReports: purchasesReportReducer,
});

export default rootReducer;
