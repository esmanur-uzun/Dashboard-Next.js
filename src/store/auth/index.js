import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};
export const fetchUser = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/posts");
    const user = await response.json();
    dispatch(actions._stateAcount(user)); // Yüklenen kullanıcıyı state'e yerleştir
  } catch (error) {
    // Hata durumunu işleyin
  }
};
export const { reducer, actions } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _stateAcount: (state, action) => {
      state.user = action.payload;
    },
    _logout: (state) => {
      state.user = null;
    },
  },
});

