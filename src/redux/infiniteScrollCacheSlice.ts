import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/product';

interface IInfiniteScrollCache {
  isBack: boolean;
  data: Array<Product>;
  scrollTop: number;
  currentPage: number;
  totalCount: number;
}

const initialState: IInfiniteScrollCache = {
  isBack: false,
  data: [],
  scrollTop: 0,
  currentPage: 0,
  totalCount: 0,
};

const infiniteScrollCacheSlice = createSlice({
  name: 'infiniteScrollCache',
  initialState,
  reducers: {
    updateIsBack: (state, action: PayloadAction<boolean>) => {
      state.isBack = action.payload;
    },
    updateInfiniteScrollCache: (state, action: PayloadAction<IInfiniteScrollCache>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearInfiniteScrollCache: () => {
      return initialState;
    },
  },
});

export const { updateIsBack, updateInfiniteScrollCache, clearInfiniteScrollCache } =
  infiniteScrollCacheSlice.actions;
export default infiniteScrollCacheSlice.reducer;
