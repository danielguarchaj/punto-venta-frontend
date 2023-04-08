import moment from "moment";

export const formatDateForBackend = (date) => {
  if (!date) {
    return "";
  }
  return moment(date, "D/M/YYYY").format("YYYY-MM-DD");
};
