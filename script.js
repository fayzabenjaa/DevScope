import { githubUsers, saveUsers} from "./storage.js";
// import { displayUsers } from "./displayUsers.js"
let usersArray = githubUsers();

const analyseFbtn = document.querySelector("#btnAnalysefirst");
const iputOne = document.querySelector('#devOne');
const inputTwo = document.querySelector('#UserLogin');
const userContainer = document.querySelector("#userContainer");

analyseFbtn.addEventListener('click', function (e) {
    e.preventDefault();
    const userName = document.querySelector("#devOne").value.trim();
    const error = document.querySelector("#error");
    if (userName === "") {
        iputOne.classList.add("border-red-500")
        error.innerText = `entrez le nom d'utilisateur`;
    }else {
        // const userContainer = document.querySelector("#userContainer");
        window.location.href = `profil.html`;
        // displayUsers();
        console.log(usersArray)
    }
});

//profil

const Analyse = document.querySelector("#Analyse");
Analyse.addEventListener('click', function (e) {
    e.preventDefault();
    const UserLogin = document.querySelector("#UserLogin").value.trim();
    const errorUser = document.querySelector("#errorUser");
    if (UserLogin === "") {
        inputTwo.classList.add("border-red-500");
        errorUser.innerText = `entrez le nom d'utilisateur`;
    } else {
        errorUser.innerText = ``;
        inputTwo.classList.remove("border-red-500");
        console.log(UserLogin);
        userContainer.classList.remove("hidden")
    }
})
