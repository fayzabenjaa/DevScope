import { githubUsers, saveUsers} from "./storage.js";
let usersArray = githubUsers();

const analysefirstbtn = document.querySelector("#analysefirst");
const devOne = document.querySelector("#devOne");

const formRecherch = document.querySelector("#formRecherch");
const formProfil = document.querySelector("#formProfil");

// const username = devinput.value;

const error = document.querySelector("#error")

// formRecherch.addEventListener('submit', (event)=> {
//     event.preventDefault();
//     if (user === "") {error.classList.remove("hidden")}
//     if(!regex.test(user)){
//         error.innerText = `enter`;
//     }
// })
const errorPage = document.querySelector("#errorPage");
// analysebtn.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     if (user === "") {errorPage.innerText=`Aucun développeur trouvé. Vérifiez le nom d'utilisateur et réessayez`;}
// })

const devTwo = document.querySelector("#devTwo");
const analysebtn = document.querySelector("#analyse")
analysebtn.addEventListener('click', function () {
    console.log(devOne.value)
    if(devOne.value === "") {
        errorPage.innerText=`Aucun développeur trouvé. Vérifiez le nom d'utilisateur et réessayez`
    }
})


