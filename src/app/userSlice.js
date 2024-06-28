import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { user: null },
  reducers: {
    setData: (state, action) => {
      state.user = action.payload
    },
  },
})

// Export reducer pour l'intégration dans le store
export default userSlice.reducer

// Export fonction de mise à jour du state
export const { setData } = userSlice.actions

// Export pour le useSelector
export const selectUser = (state) => state.user.user
