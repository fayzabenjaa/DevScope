
import { displayUsers } from "./displayUsers.js"
import { getData } from './api.js';


const Analyse = document.querySelector(".Analyse");
const anlysebtn = document.querySelector('#btnAnalysefirst')
const iputT = document.querySelector('#UserLogin');
const inputOne = document.querySelector('#devOne');


// analyseFbtn.addEventListener('click', function (e) {
//     e.preventDefault();
//     const userName = document.querySelector("#devOne").value.trim();
//     const error = document.querySelector("#error");
//     if (userName === "") {
//         iputOne.classList.add("border-red-500")
//         error.innerText = `entrez le nom d'utilisateur`;
//     }else {
//         // const userContainer = document.querySelector("#userContainer");
//         window.location.href = `profil.html`;
//         // displayUsers();
//         console.log(usersArray)
//     }
// });

anlysebtn.addEventListener('click', async function (e) {
    e.preventDefault();
    const userLogin = document.querySelector("#devOne").value.trim();
    const error = document.querySelector('#error');
    if(userLogin === "" ){
        inputOne.classList.add("border-red-500");
        error.innerText = `entrez le nom d'utilisateur`;

    }
    
})

Analyse.addEventListener('click', async function (e) {
    e.preventDefault();

    const UserLogin = document.querySelector("#UserLogin").value.trim();
    const errorUser = document.querySelector("#error");

    if (UserLogin === "") {
        iputT.classList.add("border-red-500");
        errorUser.innerText = `entrez le nom d'utilisateur`;
        return;
    }
    errorUser.innerText = ``;
    iputT.classList.remove("border-red-500");
    try {
        const userData = await getData(UserLogin);
        window.location.href = `profil.html`;
        displayUsers([userData]);
    }
    catch (error) {
        errorUser.innerText = "Utilisateur introuvable";
        console.log(error);
    }
})




