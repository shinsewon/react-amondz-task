import { actionType } from './action';

export const initialState = {
  saveItem: null,
  isModalOpen: false,
};

export const mainReducer = (state: ContextInitialStateType, action: Action) => {
  switch (action.type) {
    case 'main/MODIFY_STATE':
      return {
        ...state,
        saveItem: action.payload,
      };
    case 'main/MODAL_OPEN':
      return {
        ...state,
        isModalOpen: action.payload,
      };
    default:
      throw new Error('Unhandled action');
  }
};
