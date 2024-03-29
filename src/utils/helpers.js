export const buildFilterParams = (filters = []) =>
  filters
    .map((filter) => `${filter.filterField}=${filter.filterValue}&`)
    .join("");

export const parseJWT = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}