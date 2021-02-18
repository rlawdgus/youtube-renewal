import React, { useState } from "react";

import { categoryListIndex } from "../../lib/category";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { ButtonBase } from "@material-ui/core";
import style from "./CategoryDrawer.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

interface CategoryDrawerProps {
    category: string;
    setCategory: Function;
}

const CategoryDrawer: React.FC<CategoryDrawerProps> = ({
    category,
    setCategory,
}) => {
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
            <aside className={cx("drawer-wrapper")}>
                <ButtonBase
                    className={cx("category-name")}
                    onClick={toggleDrawer(true)}
                >
                    {category}
                </ButtonBase>
            </aside>
            <SwipeableDrawer
                anchor={"right"}
                open={drawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <List className={cx("drawer-list")}>
                    {categoryListIndex.map((item: any) => (
                        <ListItem key={item.id}>
                            <ButtonBase
                                onClick={() => {
                                    setCategory(item.name);
                                    setDrawer(false);
                                }}
                            >
                                <ListItemText>{item.name}</ListItemText>
                            </ButtonBase>
                        </ListItem>
                    ))}
                </List>
            </SwipeableDrawer>
        </>
    );
};

export default CategoryDrawer;
