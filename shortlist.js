import { githubUsers, saveUsers} from "./storage.js";
let usersArray = githubUsers();


const usersCounteur = document.querySelector("#usersCounteur");
const shortlistbtn = document.querySelector('#shortlistbtn');
const shortlistContainer = document.querySelector('#shortlistContainer');


export function test () {
    console.log("oky")
    window.location.href = `shoetlist.html`; 
}


export function shoetlistCard(users = usersArray) {
    shortlistContainer.innerHTML = "";
    users.forEach((user,i)=>{
        shortlistContainer.innerHTML += `
    <div class="bg-indigo-900 text-white rounded-2xl lg:w-360 m-10 lg:grid lg:grid-cols-2">
                <div class="flex flex-row justify-center max-sm:flex-row items-center gap-6 justify-start">
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
    </div>
    `;
    window.location.href = `shoetlist.html`;  
    })

}
