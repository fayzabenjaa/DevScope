import { githubUsers, saveUsers } from "./storage.js";
let usersArray = githubUsers();

const containerOfUsers = document.querySelector("#userContainer");

export function displayUsers(users = usersArray) {
  containerOfUsers.innerHTML = "";
  users.forEach((user, i) => {
    containerOfUsers.innerHTML += `
        <div class="bg-indigo-900 text-white rounded-2xl lg:w-360 m-10 lg:grid lg:grid-cols-3">
                <div class="flex flex-row justify-center max-sm:flex-row items-center gap-6">
                    <div>
                        <div><img src="${user.avatar_url}" alt="pfp img" class="w-32 h-32 rounded-full object-cover border-4 border-violet-400 shadow-lg m-2"></div>
                    </div>
                    <div class="m-2 text-sm text-indigo-200">
                    <div class="m-5">
                        <h1 class="font-bold text-2xl">@${user.login}</h1>
                        ${user.name ? `<p>${user.name}</p>`: ""}
                        </div>
                        ${user.bio ? `<p class="m-1"><em>${user.bio}</em></p>` : ""}
                        <p class="m-1">📅 Membre depuis : ${new Date(user.created_at).toLocaleDateString("fr-FR")}</p>
                        ${user.location ? `<p class="flex">📍 ${user.location}</p>`: "" }
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
                    <div class="grid grid-cols-3 gap-3 mt-8">
                        <div class="bg-[#1E1B4B]/80 rounded-2xl p-5 text-center">
                            <p class="text-4xl font-bold text-[#A78BFA]">${user.following}</p>
                            <p class="font-bold m-1">following</p>
                        </div>
                        <div class="bg-[#1E1B4B]/80 rounded-2xl p-5 text-center">
                        <p class="text-4xl font-bold text-[#A78BFA]">${user.followers}</p>
                            <p class="font-bold m-1">followers</p>
                        </div>
                        <div class="bg-[#1E1B4B]/80 rounded-2xl p-5 text-center">
                        <p class="text-4xl font-bold text-[#A78BFA]">${user.public_repos}</p>
                            <p class="font-bold m-1">Dépôts</p>
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
