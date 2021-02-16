import React, { useState } from "react";

import categoryList from "../../lib/category";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { ButtonBase } from "@material-ui/core";

const Drawer: React.FC = () => {
    const [drawer, setDrawer] = useState<boolean>(false);

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event &&
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
                (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }

        setDrawer(open);
    };

    return (
        <>
            <ButtonBase onClick={toggleDrawer(true)}>name</ButtonBase>
            <SwipeableDrawer
                anchor={"right"}
                open={drawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <List>
                    {categoryList.map((item: any) => (
                        <ListItem key={item.id}>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText>test</ListItemText>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
        </>
    );
};

export default Drawer;
