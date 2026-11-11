import { githubUsers, saveUsers} from "./storage.js";
import { getData } from "./api.js"
let usersArray = githubUsers();

const containerOfUsers = document.querySelector("#containerOfUsers")
export function displayUsers (users = usersArray) {
    getData();
    containerOfUsers.innerHTML = "";
    users.forEach((user, i) => {
        containerOfUsers.innerHTML += `
        <div class="bg-indigo-900 text-white rounded-2xl lg:w-360 m-10 lg:grid lg:grid-cols-3">
                <div>
                    <div><img src="" alt="pfp img" class="m-5">${user.avatar_ur}</div>
                    <div class="m-10">
                        <h1 class="font-bold text-2xl">${user.login}</h1>
                        <p>${user.name}</p>
                    </div>
                </div>
                <div>
                    <div class="flex">
                        <div class="m-5 max-sm:m-1">
                            <p class="font-bold m-1">following :</p>
                            <p class="text-2xl font-bold">${user.following}</p>
                        </div>
                        <div class="m-5 max-sm:m-1">
                            <p class="font-bold m-1">followers :</p>
                            <p class="text-2xl font-bold">${user.followers}</p>
                        </div>
                        <div class="m-5 max-sm:m-1">
                            <p class="font-bold m-1">Dépôts : ${user.public_repos}</p>
                            <p class="text-2xl font-bold">7</p>
                        </div>
                    </div>
                    <div class="m-5">
                        <p class="m-1"><em>${user.bio}</em></p>
                        <p class="m-1">Membre depuis : ${user.created_at}</p>
                        <p class="flex"><img src="" alt="">${user.location}</p>
                        <p class="m-1">link to github profile : ${user.html_url}</p>
                    </div>
                </div>
                <div class="m-10 ml-auto justify-end">
                    <button
                        class="text-[#201744] m-2 bg-[#A78BFA] p-2 rounded-2xl hover:bg-[#8B5CF6] transition-color font-bold">Ajouter
                        à la shortlist</button>
                </div>
            </div>`;
    });
};