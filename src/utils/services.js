export const SERVICES = {
    // baseUrl: "http://localhost:8000/",
    baseUrl: "https://danielguarchaj.pythonanywhere.com/",
    auth: {
        getToken: "auth/token/",
        verifyToken: "auth/token/verify/",
    },
    inventory: {
        getPurchases: "inventory/purchases/",
        getProducts: "inventory/products/",
        saveNewPurchase: "inventory/new-purchase/",
    },
    customers: {
        list: "customers/",
    }
};