import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'userData',
    initialState: {
      name:"",
      time:"",
      age:0,
    },
    reducers: {
      setName: (state,action) => {
        state.name = action.payload
      },
      setTime: (state, action) => {
        state.time = action.payload
      },
      setAge: (state, action) => {
        state.age = action.payload
      },
    },
  })

  export const { setName, setTime, setAge } = dataSlice.actions

export default dataSlice.reducer
  