import toast from "react-hot-toast";

export const DEFAULT_DURATION = 5000;
export const DEFAULT_POSITION = "bottom_right";

export const PURCHASE_LIST_PRODUCT_ADDED =
  "Producto agregado a la lista de compras";
export const PURCHASE_LIST_PRODUCT_REMOVED =
  "Producto removido de la lista de compras";
export const NEW_PURCHASE_SAVING = "Guardando nueva compra";
export const NEW_PURCHASE_SAVED = "Compra guardada con exito";
export const NEW_PURCHASE_FAILED =
  "Error al guardar la compra, intente de nuevo";
export const VOID_PURCHASE_REQUEST = "Anulando compra";
export const VOID_PURCHASE_FAILED =
  "Error al anular la compra, intente de nuevo";
export const VOID_PURCHASE_SUCCESS = "Compra anulada correctamente";

export const toastAddProductPurchaseList = () =>
  toast.success(PURCHASE_LIST_PRODUCT_ADDED, {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastRemoveProductPurchaseList = () =>
  toast.error(PURCHASE_LIST_PRODUCT_REMOVED, {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastSavingNewPurchase = () =>
  toast.loading(NEW_PURCHASE_SAVING, {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastSavedNewPurchase = () =>
  toast.success(NEW_PURCHASE_SAVED, {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastErrorNewPurchase = () =>
  toast.error(NEW_PURCHASE_FAILED, {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastRequestVoidPurchase = () =>
  toast.loading(VOID_PURCHASE_REQUEST, {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastFailedVoidPurchase = () =>
  toast.error(VOID_PURCHASE_FAILED, {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastSuccessVoidPurchase = () =>
  toast.success(VOID_PURCHASE_SUCCESS, {
    position: DEFAULT_POSITION,
    duration: DEFAULT_DURATION,
  });

export const toastInstance = toast;
