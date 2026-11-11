import { githubUsers, saveUsers } from "./storage.js";
let usersArray = githubUsers();

const containerOfUsers = document.querySelector("#userContainer");

export function displayUsers(users = usersArray) {
  containerOfUsers.innerHTML = "";
  users.forEach((user, i) => {
    containerOfUsers.innerHTML += `
        <div class="bg-indigo-900 text-white rounded-2xl lg:w-360 m-10 lg:grid lg:grid-cols-3">
                <div>
                    <div><img src="${user.avatar_url}" alt="pfp img" class="m-5 w-50 h-50 round-full"></div>
                    <div class="m-5">
                        <h1 class="font-bold text-2xl">${user.login}</h1>
                        ${user.name ? `<p>${user.name}</p>`: ""}
                    </div>
                    <div class="m-2">
                        ${user.bio ? `<p class="m-1"><em>${user.bio}</em></p>` : ""}
                        <p class="m-1">Membre depuis : ${new Date(user.created_at).toLocaleDateString("fr-FR")}</p>
                        ${user.location ? `<p class="flex"><img src="" alt="">${user.location}</p>`: "" }
                        <p class="m-1">link to github profile : 
                            <a href="${user.html_url}" 
                            target="_blank"
                            rel="noopener noreferrer"
                            class="underline text-purple-300 hover:text-purple-400">
                            Visit profile
                            </a>
                        </p>
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
                            <p class="font-bold m-1">Dépôts : </p>
                            <p class="text-2xl font-bold">${user.public_repos}</p>
                        </div>
                    </div>
                </div>
                <div class="m-10 ml-auto justify-end">
                    <button
                        class="text-[#201744] m-2 bg-[#A78BFA] p-2 rounded-2xl hover:bg-[#8B5CF6] transition-color font-bold">Ajouter
                        à la shortlist</button>
                </div>
            </div>`;
    saveUsers(usersArray);
  });
}
