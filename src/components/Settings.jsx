import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { Switch } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Settings(props) {
  const [anchorEl, setAnchorEl] = useState(null);


  //switch button click
  const handleChange = () => {
    props.darkness(!props.dark);
  };

  const open = Boolean(anchorEl);

  // setting icon click
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <SettingsIcon
        onClick={handleClick}
        className="text-black dark:text-white"
      />
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <FormControlLabel
          className="pl-3.5 text-slate-600"
          control={<Switch onChange={handleChange} />}
          label="Dark mode"
        />
        <hr />

        {/* Adding Icons in setting page */}
        <div className="flex justify-around pt-2">
          <a className="flex" href="https://github.com/programmer718" rel='noreferrer'  target='_blank'>
            <GitHubIcon />
          </a>
          <a className="flex" href="https://twitter.com/_satya07_" rel='noreferrer' target='_blank'>
            <TwitterIcon />
          </a>

          <a className="flex" href="https://linkedin.com/in/satya-dev-64b119239" rel='noreferrer' target='_blank'>
          <LinkedInIcon/>
          </a>

        </div>
      </Menu>
    </div>
  );
}

export default Settings;