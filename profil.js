
import { displayUsers, displayRepos } from "./displayUsers.js"
import { getData, getRepo, addCandidats } from "./api.js";

const inputTwo = document.querySelector('#UserLogin');
const Analyse = document.querySelector(".Analyse");

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
        const repos = await getRepo(UserLogin);

        displayUsers([userData]);
        displayRepos([repos])
        
        // console.log(repos);
        // repos.forEach(repo=> {
        //     console.log(repo.name)
        //     console.log(repo.language)
        // })
    }
    catch (error) {
        errorUser.innerText = "Utilisateur introuvable";
        console.log(error);
    }
})



