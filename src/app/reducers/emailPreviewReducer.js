import { createSlice } from "@reduxjs/toolkit";

export const emailPreviewSlice = createSlice({
  name: "emailPreview",
  initialState: {
    subjectLineA: "The Green Yoga.",
    subjectLineB: "Free email marketing course",
    subjectLinePreviewText:
      "The quick brown fox jumps right over the lazy dog. The quick brown fox jumps right over the lazy dog.",
  },
  reducers: {
    inputASubjectLineHandler: (state, action) => {
      state.subjectLineA = action.payload;
    },
    inputBSubjectLineHandler: (state, action) => {
      state.subjectLineB = action.payload;
    },
    inputPreviewTextHandler: (state, action) => {
      state.subjectLinePreviewText = action.payload;
    },
  },
});

export const {
  inputASubjectLineHandler,
  inputBSubjectLineHandler,
  inputPreviewTextHandler,
} = emailPreviewSlice.actions;

export default emailPreviewSlice.reducer;
