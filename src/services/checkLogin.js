export function checkLogin() {
    return fetch("http://localhost:8080/auth/check_login", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "json/application",
        },
        body: "Check login",
    });
}
