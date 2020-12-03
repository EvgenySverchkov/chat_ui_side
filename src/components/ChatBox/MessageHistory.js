import React, { useEffect } from "react";
import { Grid, List } from "@material-ui/core";
import Message from "./Message";

function MessageHistory({ msgArray }) {
    useEffect(() => {
        const block = document.getElementById("history");
        let maxScroll = block.scrollHeight;
        block.scrollTop = maxScroll;
    });
    return (
        <Grid item>
            <List
                component="nav"
                id="history"
                aria-label="main mailbox folders"
                style={{
                    minHeight: "65vh",
                    maxHeight: "65vh",
                    overflowY: "scroll",
                }}
            >
                {
                    msgArray.map((item) => {
                    const IsCurrUser = localStorage.getItem("userLogin") === item.u_from;
                    return (
                        <Message
                            key={item.id}
                            date={item.date}
                            from={
                                IsCurrUser
                                    ? "you"
                                    : item.u_from
                            }
                            color = {IsCurrUser?"#fff":"#b6f3e2"}
                        >
                            {item.msg}
                        </Message>
                    );
                }
                )}
            </List>
        </Grid>
    );
}

export default MessageHistory;
