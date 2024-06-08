import React from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Mobile from "./Mobile-Preview.jpg";
import "./style.css";

const PreviewPanel = () => {
  const { subjectLineA, subjectLineB, subjectLinePreviewText } = useSelector(
    (state) => state.rootReducer.emailPreview,
  );
  const renderPreview = (name, subjectLineA, subjectLineB, previewText) => {
    return (
      <div className="preview-subject-line">
        <Typography className="name" variant="subtitle1" gutterBottom>
          {name}
        </Typography>
        <div className="subject">
          <Typography variant="h6">{subjectLineA}</Typography>
          <Typography variant="subtitle2">{subjectLineB}</Typography>
          <Typography variant="body2">{previewText}</Typography>
        </div>
        <Typography className="time" variant="subtitle2" gutterBottom>
          5:45 PM
        </Typography>
      </div>
    );
  };
  return (
    <div className="preview-panel-container">
      {
        <div className="preview-panel">
          {renderPreview(
            "A",
            subjectLineA,
            subjectLineB,
            subjectLinePreviewText,
          )}
          {renderPreview(
            "B",
            subjectLineA,
            subjectLineB,
            subjectLinePreviewText,
          )}
        </div>
      }
      <img src={Mobile} alt="Mobile" />
    </div>
  );
};

export default PreviewPanel;
