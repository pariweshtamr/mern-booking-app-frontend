import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  //   city: undefined,
  //   dates: [],
  //   options: {
  //     adult: undefined,
  //     chidren: undefined,
  //     room: undefined,
  //   },
  search: {},
}

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    respondPending: (state) => {
      state.isLoading = true
    },
    newSearch: (state, { payload }) => {
      state.search = payload
    },
    resetSearch: (state) => {
      state.isLoading = false
      state.search = initialState
    },
  },
})

const { reducer, actions } = searchSlice

export const { respondPending, newSearch, resetSearch } = actions
export default reducer
