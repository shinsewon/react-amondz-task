export {};

declare global {
  type Action =
    | { type: 'main/MODIFY_STATE'; payload: ProductItem | null }
    | { type: 'main/MODAL_OPEN'; payload: boolean };

  type MainDispatch = Dispatch<Action>;

  interface ContextInitialStateType {
    saveItem: ProductItem | null;
    isModalOpen: boolean;
  }
}
