import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    filteredList: [],
    loading: true,
    list: [],
    current_card_id: "",
    api: { response: [] },
    showCarousel: true,
  },
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
      news.showCarousel = action.payload;
    },
  },
});

export const {
  recieveNews,
  recieveAPI,
  setCurrentCard,
  searchNews,
  toggleCarousel,
} = newsSlice.actions;

export default newsSlice.reducer;
