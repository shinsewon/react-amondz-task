import {
  useContext,
  createContext,
  useReducer,
  useMemo,
  ReactNode,
  Reducer,
} from 'react';
import { initialState, mainReducer } from './reducer';

const Context = createContext<ContextInitialStateType | undefined>(undefined);

const DispatchContext = createContext<MainDispatch | undefined>(undefined);

export const useMainState = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useMainState must be used within a CountProvider');
  }
  return context;
};

export const useMainDispatch = () => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error('useMainDispatch must be used within a CountProvider');
  }
  return context;
};

export function MainProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer<
    Reducer<ContextInitialStateType, Action>
  >(mainReducer, initialState);
  const memoState = useMemo(() => state, [state]);

  return (
    <Context.Provider value={memoState}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </Context.Provider>
  );
}
