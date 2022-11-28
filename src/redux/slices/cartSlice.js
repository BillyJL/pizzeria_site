import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find(obj => (obj.id === action.payload.id && 
                                                     obj.type === action.payload.type &&
                                                     obj.size === action.payload.size));

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
        },

        plusItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id && 
                obj.type === action.payload.type &&
                obj.size === action.payload.size);

            if (findItem) {
                findItem.count++;
                state.totalPrice += findItem.price;
            }
        },

        minusItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id && 
                obj.type === action.payload.type &&
                obj.size === action.payload.size);

            if (findItem) {
                if (findItem.count > 1) {
                    findItem.count--;
                    state.totalPrice -= findItem.price;
                } 
            }
        },

        removeItem(state, action) {
            state.items = state.items.filter(obj => (obj.id !== action.payload.id || 
                                                    obj.type !== action.payload.type ||
                                                    obj.size !== action.payload.size));
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.count, 0)
        },

        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        },

    }
});

export const { addItem, removeItem, plusItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;