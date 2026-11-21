
    import { displayUsers, displayRepos } from "./displayUsers.js"
    import { getData, getRepo, addCandidats } from "./api.js";
    import { setCache, getCache} from "./cache.js"

    const inputTwo = document.querySelector('#UserLogin');
    const Analyse = document.querySelector(".Analyse");

    async function showUser(e) {
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
            let profile = getCache("profile-" + UserLogin.toLowerCase());

            if(profile){
                console.log("Lu depuis le cache");
            }else{
                console.log("Chargement depuis l'API");

            const userData = await getData(UserLogin);
            const repos = await getRepo(UserLogin);

            profile = {
                    userData: userData,
                    repos: repos
                };
            setCache("profile-" + UserLogin.toLowerCase(), profile);
            }
            displayUsers([profile.userData]);
            displayRepos([profile.repos]);
            
        }
        catch (error) {
            errorUser.innerText = "Utilisateur introuvable";
            console.log(error);
        }
    }

    const params = new URLSearchParams(window.location.search);
    const username =params.get("username");

    if(username){   
            inputTwo.value = username;
            showUser(new Event("submit"));
        }

    Analyse.addEventListener('click', showUser );