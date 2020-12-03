import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/AccountPage";
import { Box } from "@material-ui/core";

function App() {
    return (
        <div className="App">
            <Box display="flex" justifyContent="center" alignItems="center">
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/account" component={AccountPage} />
                    <Redirect exact to="/login" from="/" />
                </Switch>
            </Box>
        </div>
    );
}

export default App;
