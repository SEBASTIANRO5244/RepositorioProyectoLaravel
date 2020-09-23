import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EventIcon from "@material-ui/icons/Event";
import PeopleIcon from "@material-ui/icons/People";
import style from "./style.css";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: "auto"
    }
});

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false
    });

    const toggleDrawer = (anchor, open) => event => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = anchor => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom"
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {["Inicio"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 1 === 1 ? (
                                <HomeSharpIcon />
                            ) : (
                                <HomeSharpIcon />
                            )}
                        </ListItemIcon>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <List>
                {["Nuestros Planes"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 1 === 1 ? (
                                <LocalOfferIcon />
                            ) : (
                                <LocalOfferIcon />
                            )}
                        </ListItemIcon>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <List>
                {["Agendar Cita"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 1 === 1 ? <EventIcon /> : <EventIcon />}
                        </ListItemIcon>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <List>
                {["Sobre Nosotros"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 1 === 1 ? <PeopleIcon /> : <PeopleIcon />}
                        </ListItemIcon>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <Divider />
            <List>
                {["Cerrar"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? (
                                <CloseSharpIcon />
                            ) : (
                                <CloseSharpIcon />
                            )}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            {["right"].map(anchor => (
                <React.Fragment key={anchor}>
                    <IconButton onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon
                            classes={{
                                root: classes.burger
                            }}
                            fontSize="large"
                        />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
