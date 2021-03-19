import { createSlice } from "@reduxjs/toolkit";

// creating news slice in redux store
const newsSlice = createSlice({
  name: "news",
  initialState: {
    filteredList: [],
    loading: true,
    list: [],
    current_card_id: "",
    api: { response: [] },
    showCarousel: true,
    showSearch: false,
  },
  // actions creators and reducer made by "@reduxjs/toolkit"
  reducers: {
    recieveNews: (news, action) => {
      news.list = news.filteredList = action.payload;
      news.loading = false;
    },
    recieveAPI: (news, action) => {
      news.api = action.payload;
      news.loading = false;
    },
    setCurrentCard: (news, action) => {
      news.current_card_id = action.payload;
    },
    searchNews: (news, action) => {
      news.filteredList = news.list.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    toggleCarousel: (news, action) => {
      news.showCarousel = !news.showCarousel;
      news.showSearch = !news.showSearch;
    },
  },
});

// exporting actions creators
export const {
  recieveNews,
  recieveAPI,
  setCurrentCard,
  searchNews,
  toggleCarousel,
} = newsSlice.actions;

// exporting default reducer
export default newsSlice.reducer;
