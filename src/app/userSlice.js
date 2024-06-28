import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { userName: null, firstName: null, lastName: null },
  reducers: {
    setData: (state, action) => {
      state.userName = action.payload.userName
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
    },
  },
})

// Export reducer pour l'intégration dans le store
export default userSlice.reducer

// Export fonction de mise à jour du state
export const { setData } = userSlice.actions

// Export pour le useSelector
export const selectUser = (state) => state.user
