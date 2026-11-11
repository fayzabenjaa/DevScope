import { githubUsers, saveUsers} from "./storage.js";
import { displayUsers } from "./displayUsers.js"
import { getData } from "./api.js";
let usersArray = githubUsers();

const inputTwo = document.querySelector('#UserLogin');
const Analyse = document.querySelector("#Analyse");

Analyse.addEventListener('click', async function (e) {
    e.preventDefault();

    const UserLogin = document.querySelector("#UserLogin").value.trim();
    const errorUser = document.querySelector("#errorUser");

    if (UserLogin === "") {
        inputTwo.classList.add("border-red-500");
        errorUser.innerText = `entrez le nom d'utilisateur`;
        return;
    }
    errorUser.innerText = ``;
    inputTwo.classList.remove("border-red-500");
    try {
        const userData = await getData(UserLogin);
        displayUsers([userData]);        
    }
    catch (error) {
        errorUser.innerText = "Utilisateur introuvable";
        console.log(error);
    }
})
