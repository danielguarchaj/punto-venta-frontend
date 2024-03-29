export const SERVICES = {
  // baseUrl: "http://localhost:8000/",
  baseUrl: "https://danielguarchaj.pythonanywhere.com/",
  auth: {
    getToken: "auth/token/",
    verifyToken: "auth/token/verify/",
    refreshToken: "auth/token/refresh/",
  },
  inventory: {
    getPurchases: "inventory/purchases/",
    getProducts: "inventory/products/",
    saveNewPurchase: "inventory/new-purchase/",
    getProviders: "inventory/providers/",
    voidPurchase: "inventory/void-purchase/",
    saveNewSale: "inventory/new-sale/",
    getSales: "inventory/sales/",
    voidSale: "inventory/void-sale/",
    dashboard: "inventory/dashboard/",
  },
  customers: {
    list: "customers/",
    create: "customers/",
  },
};
