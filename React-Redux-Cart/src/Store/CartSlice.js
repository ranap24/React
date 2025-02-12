import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
    totalQuantity :0,
    stateChanged : false
}

const cartSlice = createSlice({
    name : 'myCart',
    initialState,
    reducers : {
        addItemtoCart (state,action) {
            const itemTobeadded = action.payload;
            const existingItem = state.items.find(item => item.id === itemTobeadded.id );
            state.totalQuantity++;
            state.stateChanged = true
            if(!existingItem)
            {
                state.items.push({id:itemTobeadded.id,title : itemTobeadded.title,quantity : 1,price : itemTobeadded.price,total :itemTobeadded.price})
            }
            else
            {
                existingItem.quantity++;
                existingItem.total = existingItem.total + itemTobeadded.price;
            }
           
        },
        removeItemFromCart(state,action) {
                const id = action.payload;
                const removingItem = state.items.find(item => item.id === id);
                state.totalQuantity--;
                state.stateChanged = true
                if(removingItem)
                {
                    if(removingItem.quantity > 1)
                    {
                        removingItem.quantity--;
                        removingItem.total = removingItem.total - removingItem.price
                    }
                    else
                    {
                        state.items = state.items.filter(item => item.id !== removingItem.id);
                    }
                   
                }
        },
        replaceCart (state,action) 
        {
           state.items = action.payload.items;
           state.totalQuantity = action.payload.totalQuantity;
        }
    }
});

export const createCartActions = cartSlice.actions; 

export default cartSlice.reducer;