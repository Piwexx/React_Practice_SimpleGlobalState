import { useContext } from 'react';
import { createContext, useReducer } from 'react';
import { storeReducer,initialStore } from './storeReducer';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
	return (
	<StoreContext.Provider value={useReducer(storeReducer, initialStore)}>
		{children}
	</StoreContext.Provider>
	);
};

const useStore = () =>{
	return useContext(StoreContext)[0]
}

const useDispatch = () =>{
	return useContext(StoreContext)[1]
}

export { StoreContext,useStore,useDispatch };

