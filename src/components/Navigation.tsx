import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Logo from "images/wwelogo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "white",
    color: "black",
    borderBottomLeftRadius: "25px",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    width: "6.2rem",
  },
  outlinedButton: {
    border: "2px solid #2320A7",
    color: "#2320A7",
    fontWeight: 700,
  },
}));

export default function NavigationBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div>
            <img src={Logo} alt="logo" className={classes.logo} />
          </div>
          {isMobile ? (
            <>
              <IconButton
                aria-controls="nav-menu"
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="nav-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}> GET STARTED</MenuItem>
                <MenuItem onClick={handleClose}>Find a study partner</MenuItem>
                <MenuItem onClick={handleClose}>Join a study group</MenuItem>
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </Menu>
            </>
          ) : (
            <div>
              <Button variant="outlined" className={classes.outlinedButton}>
                GET STARTED
              </Button>
              <Button color="inherit">Find a study partner</Button>
              <Button color="inherit">Join a study group</Button>
              <Button color="inherit">Login</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
