import moment from "moment";

export const formatDateForBackend = (date) =>
  moment(date, "D/M/YYYY").format("YYYY-MM-DD");
