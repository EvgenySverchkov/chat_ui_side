export function loginReq(jsonData) {
    return fetch("http://localhost:8080/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "json/application",
        },
        body: jsonData,
    });
}
