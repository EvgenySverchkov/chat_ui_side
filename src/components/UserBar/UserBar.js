import React, { useState, useContext } from "react";
import {Typography, Paper, List } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import UserItem from "./UserItem";
import { AccountContext } from "../AccountContex";

function UsersBar() {
    const contextValue = useContext(AccountContext);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleListItemClick = (event, index, login) => {
        setSelectedIndex(index);
        contextValue.setUser(login);
        const obj = {
            method: "get_history",
            data: { login },
        };
        contextValue.socket.send(JSON.stringify(obj));
    };
    return (
        <Grid item xs={4} style={{ minHeight: "75vh" }}>
            <Paper elevation={3} style={{ marginBottom: "10px" }}>
                <Typography variant={"h4"} align="center">
                    Пользователи
                </Typography>
            </Paper>
            <List
                component="nav"
                aria-label="main mailbox folders"
                style={{ maxHeight: "70vh", overflow: "auto" }}
            >
                {contextValue.usersArr.map((item) => (
                    <UserItem
                        key={item.id}
                        clickHandler={(e, i) =>
                            handleListItemClick(e, i, item.name)
                        }
                        userId={item.id}
                        selectedIndex={selectedIndex}
                    >
                        {item.name}
                    </UserItem>
                ))}
            </List>
        </Grid>
    );
}
export default UsersBar;
