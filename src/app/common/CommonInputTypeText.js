import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PropTypes from "prop-types";
import { InputAdornment, OutlinedInput } from "@mui/material";
import "./style.css";
const CommonInputTypeText = ({
  startAdornment = "",
  defaultValue = "",
  onTextChangeHandler,
  isstartAdornment = true,
}) => {
  return (
    <>
      <OutlinedInput
        className="common-input"
        id={startAdornment}
        defaultValue={defaultValue}
        startAdornment={
          isstartAdornment ? (
            <InputAdornment position="start" className="start-adornment">
              {startAdornment}
            </InputAdornment>
          ) : null
        }
        endAdornment={
          <InputAdornment position="end">
            <PermIdentityOutlinedIcon />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": { startAdornment },
        }}
        onChange={onTextChangeHandler}
      />
    </>
  );
};

CommonInputTypeText.propTypes = {
  startAdornment : PropTypes.string,
  defaultValue : PropTypes.string,
  isstartAdornment : PropTypes.bool,
  onTextChangeHandler: PropTypes.func,
}
export default CommonInputTypeText;
