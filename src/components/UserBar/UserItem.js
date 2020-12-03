import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

function UserItem({ children, clickHandler, userId, selectedIndex }) {
    return (
        <ListItem
            button
            selected={selectedIndex === userId}
            onClick={(event) => clickHandler(event, userId)}
        >
            <ListItemText>{children}</ListItemText>
        </ListItem>
    );
}

export default UserItem;
