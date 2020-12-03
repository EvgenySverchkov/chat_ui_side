import React from "react";
import Button from "@material-ui/core/Button";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    btn: {
        marginTop: 30,
    },
});

function SubmitButton() {
    const style = useStyles();
    return (
        <Grid item xs={6}>
            <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                className={style.btn}
            >
                Login
            </Button>
        </Grid>
    );
}

export default SubmitButton;
