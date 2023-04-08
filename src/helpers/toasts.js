import toast from "react-hot-toast";

const DEFAULT_DURATION = 5000;
const DEFAULT_POSITION = "bottom_right";

export const toastAddProductPurchaseList = () =>
  toast.success("Producto agregado a la lista de compras", {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastRemoveProductPurchaseList = () =>
  toast.error("Producto removido de la lista de compras", {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastSavingNewPurchase = () =>
  toast.loading("Guardando nueva compra", {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastSavedNewPurchase = () =>
  toast.success("Compra guardada con exito", {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastErrorNewPurchase = () =>
  toast.error("Error al guardar la compra, intente de nuevo", {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastInstance = toast;
