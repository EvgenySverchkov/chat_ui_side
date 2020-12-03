import React, { useState, useContext } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import MessageHistory from "./MessageHistory";
import SendMsgField from "./SendMsgField";
import { AccountContext } from "../AccountContex";

function ChatBox() {
    const [msgArray, setMsgArr] = useState([]);
    const context = useContext(AccountContext);
    if (!(context.socket == null)) {
        context.socket.onmessage = (e) => {
            const obj = JSON.parse(e.data);
            Fabric(obj);
        };
    }
    function Fabric(obj) {
        switch (obj.type) {
            case "history":
                setMsgArr([...obj.data]);
                break;
            case "message":
                if (
                    context.currUser === obj.data["u_from"] ||
                    localStorage.getItem("userLogin") === obj.data["u_from"]
                ) {
                    setMsgArr((prev) => [...prev, obj.data]);
                }
                break;
        }
    }
    return (
        <Grid item xs={8} style={{ minHeight: "75vh" }}>
            <Paper elevation={3} style={{ marginBottom: "10px" }}>
                <Typography variant={"h4"} align="center">
                    Сообщения пользователя {localStorage.getItem("userLogin")}
                </Typography>
            </Paper>
            {context.currUser == null ? null : (
                <Grid container direction="column" spacing={1}>
                    <MessageHistory msgArray={msgArray} />
                    <SendMsgField />
                </Grid>
            )}
        </Grid>
    );
}

export default ChatBox;
