import React from "react";
import { Input, InputLabel, Grid } from "@material-ui/core";

function LoginField() {
    return (
        <Grid item xs={8}>
            <InputLabel htmlFor="login">Login</InputLabel>
            <Input fullWidth id="login" />
        </Grid>
    );
}
export default LoginField;
