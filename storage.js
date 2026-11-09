export function githubUsers () {
    return JSON.parse(localStorage.getItem("users")) || [];
}
export function saveUsers (usersArray) {
    localStorage.setItem("users", JSON.stringify(usersArray));
}