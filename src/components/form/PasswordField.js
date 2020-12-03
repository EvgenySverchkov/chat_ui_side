import React from "react";
import { InputLabel, Input, Grid } from "@material-ui/core";

function PassField() {
    return (
        <Grid item xs={8}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input fullWidth id="password" type="password" />
        </Grid>
    );
}

export default PassField;
