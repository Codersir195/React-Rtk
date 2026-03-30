import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem('card') ? JSON.parse(localStorage.getItem('card')) : []
}

const addToCard = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload)
      localStorage.setItem('card', JSON.stringify(state.items))
    },

    removeItem: (state, action) => {
      const cardData = state.items.filter(item => item.id != action.payload.id)
      state.items = cardData;
      localStorage.setItem('card', JSON.stringify(cardData))
    },

    clearAllItems: (state, action) => {
      const clearAll = state.items = []
      localStorage.clear('card')
    }
  }
})

export const { addItem, removeItem, clearAllItems } = addToCard.actions
export default addToCard.reducer