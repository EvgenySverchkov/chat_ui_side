export function getUsers(jsonData) {
    return fetch("http://localhost:8080/get_users", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "json/application",
        },
        body: jsonData,
    });
}
