import React from 'react';
import { useDispatch, useStore } from '../../store/storeProvider';
import { types } from '../../store/storeReducer';

export const GlobalState = () => {
	const {user,products} = useStore()
	const dispatch = useDispatch()
	
	return (
		<>
			<h1>Tienda</h1>
			<h2>User : { user ? user.name : "bienvenido" }</h2>
			<button onClick={()=>dispatch({type:types.authLogout})}>Logout</button>
			<button onClick={()=>dispatch({type:types.authLogin,payload:{id:1,name:"juan"}})}>Login</button>
			<h2>Products</h2>
			<ul>
				{
					 products.map(product =>(
						<li key={product.id}>{product.title}
						<button onClick={()=>{dispatch({type:types.productChange,payload:product.id})}}>Change</button>
						</li>
					)) 
				}
			</ul>
			<button onClick={()=>{dispatch({type:types.productDeleteAll})}}>Delete All</button>
		</>
	);
};
