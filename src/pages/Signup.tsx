import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Bg from "images/video-conference.png";
import Avatar from "@material-ui/core/Avatar";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import TwitterIcon from "@material-ui/icons/Twitter";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    marginLeft: "120px",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    //alignItems: "center",
  },
}));

const Signup = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Hidden smDown>
        <div className={classes.firstSection}>
          <h1
            style={{
              paddingLeft: "124px",

              fontSize: "5.47rem",
              width: "432px",
              lineHeight: "1",
            }}
          >
            WWE Study
          </h1>
          <p
            style={{
              maxWidth: "640px",
              paddingLeft: "131px",
              marginRight: "124px",
              marginTop: "24px",
              marginBottom: "21px",
              // paddingRight: "184px",
            }}
          >
            Find the perfect study partners according to your interests,
            preferences, specific courses and more.
          </p>
          <p style={{ paddingLeft: "131px" }}>Login with social media</p>
          <div className={classes.root}>
            <Avatar style={{ backgroundColor: "#2969BA", cursor: "pointer" }}>
              <FaFacebookF />
            </Avatar>
            <Avatar style={{ backgroundColor: "#4AC0EF", cursor: "pointer" }}>
              <TwitterIcon />
            </Avatar>
            <Avatar style={{ backgroundColor: "white", cursor: "pointer" }}>
              <FcGoogle />
            </Avatar>
          </div>
        </div>
      </Hidden>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          // width: "50%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: "0 auto" }}>
          <h2 style={{ fontSize: "30px" }}>Sign Up</h2>
          <form noValidate autoComplete="off" className={classes.form}>
            <TextField id="name" label="Name" />
            <TextField id="password" type="password" label="Password" />
            <TextField
              id="confirmPassword"
              type="password"
              label="Confirm password"
            />
            <p style={{ fontSize: "14px", color: "#9A9A9A" }}>
              You are agreeing to the{" "}
              <span style={{ color: "#050505" }}>Terms of Services</span> and{" "}
              <span style={{ color: "#050505" }}>Privacy Policy</span>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                disableElevation
                style={{
                  backgroundColor: "#0905A3",
                  color: "white",
                  textTransform: "capitalize",
                  width: "170px",
                }}
              >
                Get Started
              </Button>
              <p style={{ color: "#9A9A9A" }}>
                Already a member ?{" "}
                <span style={{ color: "#0002D8", cursor: "pointer" }}>
                  Sign in
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
