import { mockApi,  removeCandidat } from "./api.js";
const usersCounteur = document.querySelector("#usersCounteur");
const shortlistbtn = document.querySelector('.shortlistbtn');
const shortlistContainer = document.querySelector('#shortlistC');



export async function shortlistCard() {
    let users = await mockApi();

    usersCounteur.textContent = `${users.length} candidat(s) dans votre shortlist`;
    shortlistContainer.innerHTML = "";

    users.forEach((user, i) => {
        shortlistContainer.innerHTML += `
            <div class="bg-indigo-900 text-white rounded-2xl lg:w-360 m-10 lg:grid lg:grid-cols-2">
                <div class="flex flex-row justify-center max-sm:flex-row items-center gap-6 justify-start">
                    <div>
                        <div>
                            <img src="${user.avatar_url}" alt="pfp img" class="w-32 h-32 rounded-full object-cover border-4 border-violet-400 shadow-lg m-2">
                        </div>
                    </div>

                    <div class="m-2 text-sm text-indigo-200">
                        <div class="m-5">
                            <h1 class="font-bold text-2xl">
                                <a href="${user.html_url}" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="underline text-purple-300 hover:text-purple-400">
                                    @${user.login}
                                </a>
                            </h1>

                            ${user.name ? `<p>${user.name}</p>` : ""}
                        </div>

                        ${user.bio ? `<p class="m-1"><em>${user.bio}</em></p>` : ""}
                        <p class="m-1">Membre depuis : ${new Date(user.created_at).toLocaleDateString("fr-FR")}</p>
                        ${user.location ? `<p class="flex">${user.location}</p>` : ""}

                        <p class="m-1">Link to github profile:
                            <a href="${user.html_url}" 
                                target="_blank"
                                rel="noopener noreferrer"
                                class="underline text-purple-300 hover:text-purple-400">
                                Visit profile
                            </a>
                        </p>
                    </div>
                    
                </div>
                <div class="flex flex-row ml-auto justify-end">
                     <div class="flex flex-row m-5">
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    </div>
                    <button 
                    data-id="${user.id}" 
                    class="editbtn text-[#201744] m-5 max-sm:ml-3 h-10 bg-[#A78BFA] p-2 rounded-2xl hover:bg-[#8B5CF6] transition-colors font-bold ">
                    Modifier 
                    </button>
                    <button 
                    data-id="${user.id}" 
                    class="deletbtn text-[#201744] m-5 max-sm:ml-3 h-10 bg-[#A78BFA] p-2 rounded-2xl hover:bg-[#8B5CF6] transition-colors font-bold ">
                    Delete
                    </button>
                </div>

            </div>
        `;
       const deletbnt = shortlistContainer.querySelectorAll(".deletbtn")[i];
    });
}




//search by username in shortlist
const searchShortlist = document.querySelector('#searchShortlist');
console.log(window.location.href)
console.log(searchShortlist)

if(searchShortlist){
    searchShortlist.addEventListener('input', async function () {
    const userSearching = searchShortlist.value.trim();

    const users = await mockApi();

    const filterUsesr = users.filter((user)=>{
        return user.login.includes(userSearching);
    })
    shortlistContainer.innerHTML = "";
    filterUsesr.forEach((user, i)=>{
        shortlistContainer.innerHTML += `
    <div class="bg-indigo-900 text-white rounded-2xl lg:w-360 m-10 lg:grid lg:grid-cols-2">
                <div class="flex flex-row justify-center max-sm:flex-row items-center gap-6 justify-start">
                    <div>
                        <div><img src="${user.avatar_url}" alt="pfp img" class="w-32 h-32 rounded-full object-cover border-4 border-violet-400 shadow-lg m-2"></div>
                    </div>
                    <div class="m-2 text-sm text-indigo-200">
                    <div class="m-5">
                        <h1 class="font-bold text-2xl"><a href="${user.html_url}" 
                            target="_blank"
                            rel="noopener noreferrer"
                            class="underline text-purple-300 hover:text-purple-400">
                            @${user.login}</a></h1>
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
                <button class="deletbtn text-[#201744] m-5 max-sm:ml-3 h-10 bg-[#A78BFA] p-2 rounded-2xl hover:bg-[#8B5CF6] transition-color font-bold ml-auto justify-end" >delet</button>
    </div>
    `;
    })
})

}


 //delet
 if(shortlistContainer){
    shortlistContainer.addEventListener("click", async function (e) {
            const button = e.target.closest(".deletbtn")
            if(!button) return;

            const id = Number(button.dataset.id);

            console.log("candidat id :", id); 

            if (!confirm("Supprimer cet utilisateur ?")) return;

            try {
                await removeCandidat(id);
                // users = users.filter((user) => Number(user.id) !== id);

                console.log("candidate deleted!");

                await shortlistCard();

            } catch (error) {
                console.error(error);
            }
        });    
 }
 


