import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import UsersBar from "../components/UserBar";
import ChatBox from "../components/ChatBox";
import { openSocketConnection } from "../services/openSocketConnection";
import { AccountContext } from "../components/AccountContex";
import { getUsers } from "../services/getUsers";

function AccountPage({ history }) {
    const [usersArray, setUsersArray] = useState([]);
    const [socketObj, setSocketObj] = useState(null);
    const [changedUser, setChangedUser] = useState(null);

    useEffect(() => {
        const JsonLogin = localStorage.getItem("userLogin");
        getUsers(JsonLogin).then((data) => {
            if (data.ok) {
                data.json().then((data) => setUsersArray(data));
            }
        });
        let socket = openSocketConnection(history);
        setSocketObj(socket);
    }, []);

    return (
        <AccountContext.Provider
            value={{
                usersArr: usersArray,
                socket: socketObj,
                currUser: changedUser,
                setUser: (user) => setChangedUser(user),
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <UsersBar h={history} />
                    <ChatBox />
                </Grid>
            </Container>
        </AccountContext.Provider>
    );
}

export default AccountPage;
