import React from "react";
import { Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CommonInputTypeText from "../common/CommonInputTypeText";
import {
  inputASubjectLineHandler,
  inputBSubjectLineHandler,
  inputPreviewTextHandler,
} from "../reducers/emailPreviewReducer";
import "./style.css";

const SubjectLineEditor = () => {
  const { subjectLineA, subjectLineB, subjectLinePreviewText } = useSelector(
    (state) => state.rootReducer.emailPreview,
  );
  const dispatch = useDispatch();
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className="subject-line">
          <Typography variant="h6" gutterBottom>
            Subject Line
          </Typography>
          <CommonInputTypeText
            startAdornment="A"
            defaultValue={subjectLineA}
            onTextChangeHandler={(e) =>
              dispatch(inputASubjectLineHandler(e.target.value))
            }
          />
          <CommonInputTypeText
            startAdornment="B"
            defaultValue={subjectLineB}
            onTextChangeHandler={(e) =>
              dispatch(inputBSubjectLineHandler(e.target.value))
            }
          />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div>
          <Typography variant="h6" gutterBottom>
            Preview text
          </Typography>
          <CommonInputTypeText
            defaultValue={subjectLinePreviewText}
            isstartAdornment={false}
            onTextChangeHandler={(e) =>
              dispatch(inputPreviewTextHandler(e.target.value))
            }
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default SubjectLineEditor;
