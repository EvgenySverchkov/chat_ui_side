import React from "react";
import {
    ListItemText,
    Divider,
    Card,
    CardContent,
    Typography,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        borderRadius: 30
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function Message({ date, from, children, color }) {
    let classes = useStyles();
    const UtcDate = new Date(date);
    function parseDate(UtcDate) {
        return `${UtcDate.getDate()}-${UtcDate.getMonth()+1}-${UtcDate.getFullYear()}`;
    }
    function parseTime(UtcDate) {
        return `${UtcDate.getHours()}:${UtcDate.getMinutes()}:${UtcDate.getSeconds()}`;
    }
    return (
        <>
            <ListItemText style={{ whiteSpace: "pre-wrap" }}>
                <Card className={classes.root} style={{background: color}} variant="outlined">
                    <CardContent>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            From: {from}
                        </Typography>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Date: {parseDate(UtcDate)}
                        </Typography>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                        >
                            Time: {parseTime(UtcDate)}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {children}
                        </Typography>
                    </CardContent>
                </Card>
            </ListItemText>
        </>
    );
}

export default Message;
