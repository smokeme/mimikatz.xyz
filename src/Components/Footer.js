import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div>
          <Typography variant="title">Created by Fawaz</Typography>
        </div>
        <a
          href="https://www.twitter.com/q8fawazo"
          target="_blank"
          style={{ color: "#1DA1F2" }}
        >
          <TwitterIcon fontSize="small" />
        </a>
        <a
          href="https://www.github.com/smokeme/mimikatz.xyz"
          target="_blank"
          style={{ color: "white" }}
        >
          <GithubIcon fontSize="small" />
        </a>
      </div>
    );
  }
}

export default Footer;
