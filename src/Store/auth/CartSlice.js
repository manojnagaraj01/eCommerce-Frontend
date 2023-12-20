import { createSlice } from "@reduxjs/toolkit";

const cartSlice  = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        cart: (state,action)=>{
            state.push({...action.payload,qty:1})
            return state

        },
        itemIncrement:(state,action)=>{
          const obj= state.find((elem)=>elem._id===action.payload)
            obj.quantity +=1
            return state

          
        },
        itemDecrement:(state,action)=>{
            const obj= state.find((elem)=>elem._id===action.payload)
            if( obj.quantity>1){
                obj.quantity -=1

            }else{
               const obj = state.filter((elem)=> elem._id!==action.payload)
                
                return state =obj
            }
            
          },
          deleteItemFromCart: (state,action)=>{
          
               const obj = state.filter((elem)=> elem._id!==action.payload)
                
                return state =obj
          }
    }
})


export const {cart,itemIncrement,itemDecrement,deleteItemFromCart} = cartSlice.actions
export default cartSlice.reducer
