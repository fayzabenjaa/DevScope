import { githubUsers, saveUsers} from "./storage.js";
import { displayUsers } from "./displayUsers.js"
let usersArray = githubUsers();

const analyseFbtn = document.querySelector("#analysefirst");
const iputOne = document.querySelector('#devOne');

analyseFbtn.addEventListener('click', function (e) {
    e.preventDefault();
    let userName = document.querySelector("#devOne").value.trim();
    const error = document.querySelector("#error");
    if (userName === "") {
        iputOne.classList.add("border-red-500")
        error.innerText = `entrez le nom d'utilisateur`;
    }else {
        const userContainer = document.querySelector("#userContainer");
        window.location.href = `profil.html`;
        displayUsers();
        
    }
});
//profil
const analysebtn = document.querySelectorAll(".analyse");
let userName = document.querySelector("#devTwo")
console.log("fayza",analysebtn)
function userf () {

    displayUsers();
}
analysebtn.addEventListener('click', userf);
