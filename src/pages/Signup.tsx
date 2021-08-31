import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Bg from "images/video-conference.png";
import Avatar from "@material-ui/core/Avatar";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  container: {
    display: "flex",
    height: "100%",
  },
  firstSection: {
    backgroundImage: `linear-gradient(rgba(7, 4, 186, 0.336) , rgba(7, 4, 186, 0.336)), url(${Bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat center",
    width: "50%",
    color: "white",
  },
}));

const Signup = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.firstSection}>
        <h1>WWE Study</h1>
        <p>
          Find the perfect study partners according to your interests,
          preferences, specific courses and more.
        </p>
        <p>Login with social media</p>
        <div className="classes.root">
          <Avatar>
            <FacebookIcon />
          </Avatar>
          <Avatar>
            <TwitterIcon />
          </Avatar>
        </div>
      </div>
      <div>welcome</div>
    </div>
  );
};

export default Signup;
