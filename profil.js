
import { displayUsers } from "./displayUsers.js"
import { getData, addCandidats } from "./api.js";

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
        await addCandidats(userData);

        displayUsers([userData]);
        
        // const repos = await getRepo(UserLogin);
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



