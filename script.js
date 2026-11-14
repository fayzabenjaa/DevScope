
import { displayUsers } from "./displayUsers.js"
import { getData } from './api.js';


const anlysebtn = document.querySelector('#btnAnalysefirst')
const iputT = document.querySelector('#UserLogin');
const inputOne = document.querySelector('#devOne');

async function show(e) {
    e.preventDefault();
    const userLogin = document.querySelector("#devOne").value.trim();
const error = document.querySelector('#error');
    if(userLogin === "" ){
        inputOne.classList.add("border-red-500");
        error.innerText = `entrez le nom d'utilisateur`;
        return;
    }
    error.innerText = ``;
    inputOne.classList.remove("border-red-500");

    window.location.href = `profil.html?username=${encodeURIComponent(userLogin)}`;
    // try {
    //     const userData = await getData(userLogin);
    //     displayUsers([userData]);
        
    // }
    // catch (error){
    //     error.innerText = "Utilisateur introuvable";
    //     console.log(error);
    // }

    
}

anlysebtn.addEventListener('click', show)






