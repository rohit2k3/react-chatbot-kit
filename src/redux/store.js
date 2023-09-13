import { configureStore } from '@reduxjs/toolkit'

import user from './reducer/slicer'


export default configureStore({
  reducer: {
    user:user
  },
})