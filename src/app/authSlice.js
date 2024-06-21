import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: { token: null },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

// Export reducer pour l'intégration dans le store
export default authSlice.reducer

// Export fonction de mise à jour du state
export const { setToken } = authSlice.actions

// Export pour le useSelector
export const selectToken = (state) => state.auth.token
