import { githubUsers, saveUsers} from "./storage.js";
import { displayUsers } from "./displayUsers.js"
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
        const userContainer = document.querySelector("#userContainer");
        window.location.href = `profil.html`;
        // displayUsers();
    }
}
analyseFbtn.addEventListener('click', validationFirst())

const analysebtn = document.querySelectorAll(".analyse");
console.log("fayza",analysebtn)
function userf () {
    console.log("test");
}
analysebtn.addEventListener('click', userf);
