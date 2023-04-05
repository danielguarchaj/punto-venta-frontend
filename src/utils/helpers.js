export const buildFilterParams = (filters = []) =>
  filters
    .map((filter) => `${filter.filterField}=${filter.filterValue}&`)
    .join("");
