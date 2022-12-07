const initialStore= {
    user:{id:1,name:"juan"},
    products:[
        {id:1,title:"product 1"},
        {id:2,title:"product 2"}
    ]
    
}
const types = {
    authLogin: " authLogin",
    authLogout: "authLogout",
    productDeleteAll: "productDeleteAll",
    productChange: "productChange"
}

export const storeReducer = (state,action) => {
    switch(action.type){
        case types.authLogin:
            return {
                ...state,
                user:action.payload}
        case types.authLogout:
            return {
                ...state, 
                 user:null
            }
        case types.productChange:
            return {
                ...state,
                products: [...state.products,{id:3,title:"Producto 3"}]
            }
          
        case types.productDeleteAll:{
            return {
                ...state,
                products :[]
            }
        }
           
        default:
            return state
    }
}

export {initialStore,types}

