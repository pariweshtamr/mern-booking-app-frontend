import { configureStore } from "@reduxjs/toolkit"
import searchReducer from "./redux/Search/SearchSlice"
import userReducer from "./redux/User/UserSlice"

const Store = configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer,
  },
})

export default Store
