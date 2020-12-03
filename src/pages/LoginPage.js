import React, { useEffect } from "react";
import Button from "../components/form/Button";
import LoginField from "../components/form/LoginField";
import PasswordField from "../components/form/PasswordField";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { loginReq } from "../services/loginRequests";
import { checkLogin } from "../services/checkLogin";

const useStyle = makeStyles(function () {
    return {
        styleDiv: {
            height: "85vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        },
    };
});

function LoginPage({ history }) {
    useEffect(() => {
        //todo: check login with request
        checkLogin()
            .then((data) => data.json())
            .then((data) => (data.success ? history.push("/account") : null));
    }, []);
    const css = useStyle();
    function submitHandler(e, history) {
        e.preventDefault();
        const formFields = e.target.elements;
        const userInfo = {
            login: formFields.login.value,
            password: formFields.password.value,
        };
        loginReq(JSON.stringify(userInfo))
            .then((data) => data.json())
            .then((data) => {
                if (data.success) {
                    localStorage.setItem("userLogin", userInfo.login);
                    history.push("/account");
                } else {
                    console.error("Wrong password or login");
                }
            });
        return;
    }
    return (
        <div className={css.styleDiv}>
            <form
                style={{ width: "100%" }}
                onSubmit={(e) => submitHandler(e, history)}
            >
                <Grid container spacing={3} justify="center">
                    <LoginField />
                    <PasswordField />
                    <Button />
                </Grid>
            </form>
        </div>
    );
}

export default LoginPage;
