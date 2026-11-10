import { githubUsers, saveUsers} from "./storage.js";
let usersArray = githubUsers();

const analyseFbtn = document.querySelector("#analysefirst");
const iputOne = document.querySelector('#devOne');

function validationFirst (event) {
    event.preventDefault();
    const userName = document.querySelector("#devOne").value.trim();
    const error = document.querySelector("#error");
    if (userName === "") {
        iputOne.classList.add("border-red-500")
        error.innerText = `entrez le nom d'utilisateur`;
    }else {
        window.location.href = `profil.html`;
        document.querySelector("#devTwo").value = userName;
    }
}
analyseFbtn.addEventListener('click', validationFirst);

