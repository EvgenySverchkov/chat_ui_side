import React, { useContext } from "react";
import { Button, Grid, TextField } from "@material-ui/core";
import { AccountContext } from "../AccountContex";

function SendMsgField() {
    const context = useContext(AccountContext);
    function sendMsgHandler(e) {
        e.preventDefault();
        const textMsg = e.target.elements.message.value;
        const msgObj = {
            method: "send_msg",
            data: {
                text: textMsg,
                to: context.currUser,
            },
        };
        context.socket.send(JSON.stringify(msgObj));
        e.target.reset();
        return;
    }
    return (
        <Grid item>
            <form onSubmit={sendMsgHandler}>
                <Grid container spacing={1} justify="space-between">
                    <Grid item xs={9}>
                        <TextField
                            id="message"
                            fullWidth
                            placeholder="Enter message"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ float: "right" }}
                        >
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
}

export default SendMsgField;
