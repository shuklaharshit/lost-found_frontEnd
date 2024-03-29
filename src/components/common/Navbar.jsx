import React, { useContext } from "react";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchBar from "../common/SearchBar";
import Button from "../common/Button";
import MenuButton from "./MenuButton";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Loginpop from "../Login/Loginpop";
import MainContext from "../../context/main/mainContext";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: "bold"
    }
}));

const Navbar = () => {
    const mainContext = useContext(MainContext);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="default">
                <Toolbar>
                    <span style={{ marginRight: "0.9rem" }}>
                        <MenuButton />
                    </span>
                    <Hidden xsDown>
                        <Typography variant="h5" className={classes.title}>
                            <a
                                href="/"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit"
                                }}
                            >
                                Lost&Found
                            </a>
                        </Typography>
                    </Hidden>
                    <Hidden smUp>
                        <Typography variant="h5" className={classes.title}>
                            <a
                                href="/"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit"
                                }}
                            >
                                L&F
                            </a>
                        </Typography>
                    </Hidden>
                    <SearchBar />
                    <span style={{ marginLeft: "auto" }}>
                        <Hidden xsDown>
                            <Button
                                variant="outlined"
                                text="Login"
                                color="primary"
                                onClick={mainContext.handleModalOpen}
                            ></Button>
                        </Hidden>
                    </span>
                    {/* <IconButtonWithBadge
                            icon={
                                <ShoppingCart
                                    text="shopping cart"
                                    color="primary"
                                />
                            }
                            color="secondary"
                        /> */}
                </Toolbar>
            </AppBar>
            <Modal
                aria-labelledby="Login Form"
                open={mainContext.open_Login_Modal}
                onClose={mainContext.handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
                style={{ overflow: "scroll" }}
            >
                <Fade in={mainContext.open_Login_Modal}>
                    <React.Fragment>
                        <Loginpop />
                    </React.Fragment>
                </Fade>
            </Modal>
        </div>
    );
};

export default Navbar;
