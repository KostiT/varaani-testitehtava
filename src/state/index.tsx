import React, { createContext, useReducer, useEffect } from 'react';
import { DEFAULT_USER, User } from '../model/user';

export interface State {
  isLogin: boolean;
  user: User;
  appLoaded: boolean;
};

const initialState: State = {
  isLogin: false,
  user: DEFAULT_USER,
  appLoaded: false
};

interface IContextProps {
	state: State;
	dispatch: React.Dispatch<StateActions>;
}

export type StateAction<Type, Payload> = { type: Type; payload: Payload };

export type StateActions = StateAction<'LOGOUT', null> | StateAction<'LOGIN', User>;

const reducer = (state = initialState, action: StateActions) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload, isLogin: true };
    case 'LOGOUT':
      return { ...state, user: DEFAULT_USER, isLogin: false };
    default:
      return state;
  }
};

// export const useGlobalState = () => useReducer(reducer, initialState);

// export const GlobalStateContext = createContext<{ state: State; dispatch: Dispatch<StateActions> }>(
//   {} as any,
// );
export const AppContext = createContext({} as IContextProps);

export function AppContextProvider(props: any) {
	const [state, dispatch] = useReducer(reducer, initialState); // usato loggerReducer invece che reducer
	useEffect(() => {
		console.log('*****', state); // 3
		if (!state.appLoaded) return;
		const persistentData = JSON.stringify({
			user: state.user,
			isLogin: state.isLogin
		});
    localStorage.setItem("userInfo", persistentData)
	}, [state]);

	const value = { state, dispatch };

	return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}

export function getStorageData(state: State) {
	console.log('storage app loaded', state.appLoaded); // at first time -> false 2
  if (state.appLoaded) return state;
  const userInfo = localStorage.getItem("userInfo");
  if(userInfo){
    const storage = JSON.parse(userInfo);
    console.log('storage is not null', storage);
    state.user = storage.user ?? state.user;
    state.isLogin = storage.isLogin;
    console.log('storage loaded: ', storage);
  } else {
    console.log('storage is null');
  }
  state.appLoaded = true; // here true
  return state;
}