import { combineReducers } from "@reduxjs/toolkit";
import emailPreviewReducer from "./emailPreviewReducer";

const rootReducer = combineReducers({
  emailPreview: emailPreviewReducer,
  // Add other reducers here if you have more
});

export default rootReducer;
