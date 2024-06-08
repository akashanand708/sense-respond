import { StrictMode } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import store from "./app/store";
import SubjectLineEditor from "./app/subjectLineEditor/SubjectLineEditor";
import PreviewPanel from "./app/previewPanel/PreviewPanel";
import { Grid, Typography } from "@mui/material";
import "./style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Typography variant="h4">Subject</Typography>
      <Typography variant="subtitle2" gutterBottom>
        Add a subject line for this campaign.
      </Typography>
      <div className="main-container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={6} xl={6}>
            <SubjectLineEditor />
          </Grid>
          <Grid item xs={12} md={12} lg={6} xl={6}>
            <PreviewPanel />
          </Grid>
        </Grid>
      </div>
    </Provider>
  </StrictMode>,
);
