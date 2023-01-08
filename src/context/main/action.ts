export const actionType = {
  MODIFY_STATE: 'main/MODIFY_STATE',
  MODAL_OPEN: 'main/MODAL_OPEN',
};

export const createAction = (type: string, payload: any) => {
  return payload !== undefined ? { type, payload } : { type };
};

export const actions = {
  MODIFY_STATE: (payload: ProductItem | null) =>
    createAction(actionType.MODIFY_STATE, payload),
  MODAL_OPEN: (payload: boolean) =>
    createAction(actionType.MODAL_OPEN, payload),
};
