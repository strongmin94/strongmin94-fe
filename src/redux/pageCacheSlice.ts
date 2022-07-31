import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPageCache {
  pathname: string;
  scrollTop: number;
  isBack: boolean;
}

const initialState: IPageCache = {
  pathname: '',
  scrollTop: 0,
  isBack: false,
};

const pageCacheSlice = createSlice({
  name: 'pageCache',
  initialState,
  reducers: {
    updatePageCache: (_, action: PayloadAction) => {
      return action.payload;
    },
    clearPageCache: () => {
      return initialState;
    },
  },
});

export const { updatePageCache, clearPageCache } = pageCacheSlice.actions;
export default pageCacheSlice.reducer;
