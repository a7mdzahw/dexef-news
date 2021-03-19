import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: { filteredList: [], list: [], current_card_id: "", api: { response: [] } },
  reducers: {
    recieveNews: (news, action) => {
      news.list = news.filteredList = action.payload;
    },
    recieveAPI: (news, action) => {
      news.api = action.payload;
    },
    setCurrentCard: (news, action) => {
      news.current_card_id = action.payload;
    },
    searchNews: (news, action) => {
      news.filteredList = news.list.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { recieveNews, recieveAPI, setCurrentCard, searchNews } = newsSlice.actions;

export default newsSlice.reducer;
