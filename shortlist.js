import { mockApi, removeCandidat } from "./api.js";
const usersCounteur = document.querySelector("#usersCounteur");
const shortlistbtn = document.querySelector(".shortlistbtn");
const shortlistContainer = document.querySelector("#shortlistC");

const searchShortlist = document.querySelector("#searchShortlist");

const enregistrer = document.querySelector("#enregistrer");
const statutPopup = document.querySelector("#statut");
const statutC = document.querySelector("#statutC");
const ratePopup = document.querySelector("#rate");
const notePopup = document.querySelector("#note");

export async function shortlistCard() {
  let users = await mockApi();

  usersCounteur.textContent = `${users.length} candidat(s) dans votre shortlist`;
  shortlistContainer.innerHTML = "";

  users.forEach((githubUser, i) => {
    shortlistContainer.innerHTML += `
            <article data-id="${githubUser.id}" class="usercard bg-indigo-900 text-white rounded-2xl lg:w-360 m-10 lg:grid lg:grid-cols-2">
                <div class="flex flex-row justify-center max-sm:flex-row items-center gap-6 justify-start">
                    <div>
                        <div>
                            <img src="${githubUser.pfp}" alt="pfp img" class="w-32 h-32 rounded-full object-cover border-4 border-violet-400 shadow-lg m-2">
                        </div>
                    </div>

                    <div class="m-2 text-sm text-indigo-200">
                        <div class="m-5">
                            <h1 class="font-bold text-2xl">
                                <a href="${githubUser.url}" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="underline text-purple-300 hover:text-purple-400">
                                    @${githubUser.login}
                                </a>
                            </h1>

                            ${githubUser.nom ? `<p>${githubUser.nom}</p>` : ""}
                        </div>

                        ${githubUser.bio ? `<p class="m-1"><em>${githubUser.bio}</em></p>` : ""}
                        <p class="m-1">Membre depuis : ${new Date(githubUser.creatAt).toLocaleDateString("fr-FR")}</p>
                        ${githubUser.location ? `<p class="flex">${githubUser.location}</p>` : ""}

                        <p class="m-1">Link to github profile:
                            <a href="${githubUser.url}" 
                                target="_blank"
                                rel="noopener noreferrer"
                                class="underline text-purple-300 hover:text-purple-400">
                                Visit profile
                            </a>
                        </p>
                    </div>
                    
                </div>
                <div class="flex flex-row ml-auto justify-end">
                     <div class="starsRating flex flex-row m-5">
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    </div>
                    <p class="statutC bg-green-200 text-green-600 m-5 max-sm:ml-3 h-10 p-2 rounded-2xl hover:bg-green-400 transition-colors font-bold">À contacter</p>
                    <button 
                    data-id="${githubUser.id}" 
                    class="editbtn text-[#201744] m-5 max-sm:ml-3 h-10 bg-[#A78BFA] p-2 rounded-2xl hover:bg-[#8B5CF6] transition-colors font-bold ">
                    Modifier 
                    </button>
                    <button 
                    data-id="${githubUser.id}" 
                    class="deletbtn text-[#201744] m-5 max-sm:ml-3 h-10 bg-[#A78BFA] p-2 rounded-2xl hover:bg-[#8B5CF6] transition-colors font-bold ">
                    Delete
                    </button>
                </div>

            </article>
        `;
    const deletbnt = shortlistContainer.querySelectorAll(".deletbtn")[i];
    const editbtn = shortlistContainer.querySelectorAll(".editbtn")[i];
    const usercard = shortlistContainer.querySelectorAll(".usercard")[i];
    const statutC = shortlistContainer.querySelectorAll('.statutC')[i];
    const starsRating = shortlistContainer.querySelectorAll('.starsRating')[i];
  });
}

//search by username in shortlist

if (searchShortlist) {
  searchShortlist.addEventListener("input", async function () {
    const userSearching = searchShortlist.value.trim();

    const users = await mockApi();

    const filterUsesr = users.filter((user) => {
      return user.login.includes(userSearching);
    });
    shortlistContainer.innerHTML = "";
    filterUsesr.forEach((user, i) => {
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
                        ${user.name ? `<p>${user.name}</p>` : ""}
                        </div>
                        ${user.bio ? `<p class="m-1"><em>${user.bio}</em></p>` : ""}
                        <p class="m-1">📅 Membre depuis : ${new Date(user.created_at).toLocaleDateString("fr-FR")}</p>
                        ${user.location ? `<p class="flex">📍 ${user.location}</p>` : ""}
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
    });
  });
}

//delet
if (shortlistContainer) {
  shortlistContainer.addEventListener("click", async function (e) {
    const buttondelet = e.target.closest(".deletbtn");
    if (!buttondelet) return;

    const id = Number(buttondelet.dataset.id);

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

//edit
let editId = null;
if (shortlistContainer) {
  shortlistContainer.addEventListener("click", function (e) {
    const buttonedit = e.target.closest(".editbtn");
    const usercard = e.target.closest(".usercard");
    const statutC = usercard.querySelector(".statutC");
    const starsRating = usercard.querySelector(".starsRating")
    console.log("the edit btn"+buttonedit);
    console.log("edit statut container"+ statutC)
    console.log("starts container"+ starsRating)

    // editId = Number(buttonedit.dataset.id);
    if (!buttonedit) return;
    bgblur.classList.remove("hidden");
    if (enregistrer) {
      enregistrer.addEventListener("click", async function (e) {
        console.log("of popup :" + statutPopup.value);
        console.log("of popup :" + ratePopup.value);
        console.log("of popup :" + notePopup.value);
        //statut
        if (statutPopup.value === "Refusé") {
          statutC.textContent = "";
          statutC.textContent = `${statutPopup.value}`
          statutC.className = "statutC bg-red-200 text-red-600 m-5 max-sm:ml-3 h-10 p-2 rounded-2xl hover:bg-red-400 transition-colors font-bold";
        }else if (statutPopup.value === "Retenu"){
            statutC.textContent = "";
            statutC.textContent = `${statutPopup.value}`;
            statutC.className = "statutC bg-orange-200 text-orange-600 m-5 max-sm:ml-3 h-10 p-2 rounded-2xl hover:bg-orange-400 transition-colors font-bold";
        }else if(statutPopup.value === "Entretien"){
            statutC.textContent = "";
            statutC.textContent = `${statutPopup.value}`;
            statutC.className = "statutC bg-yellow-200 text-yellow-600 m-5 max-sm:ml-3 h-10 p-2 rounded-2xl hover:bg-yellow-400 transition-colors font-bold";
        }else if(statutPopup.value === "À contacter"){
           statutC.textContent = "";
          statutC.textContent = `${statutPopup.value}`
          statutC.className = "statutC bg-green-200 text-green-600 m-5 max-sm:ml-3 h-10 p-2 rounded-2xl hover:bg-green  -400 transition-colors font-bold";
        }
        //starts
        if(ratePopup.value === "5/5"){
            starsRating.innerHTML ="";
            starsRating.innerHTML+= `
            <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
            `;
        }else if(ratePopup.value === "4/5"){
            starsRating.innerHTML ="";
            starsRating.innerHTML+= `
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 ">&#9734;</p>
            `;
        }else if (ratePopup.value === "3/5"){
            starsRating.innerHTML ="";
            starsRating.innerHTML+= `
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 ">&#9734;</p>
                    <p class="text-2xl m-1 text-green-200 ">&#9734;</p>
            `;
        }else if ( ratePopup.value === "2/5"){
            starsRating.innerHTML ="";
            starsRating.innerHTML+= `
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 ">&#9734;</p>
                    <p class="text-2xl m-1 text-green-200 ">&#9734;</p>
                    <p class="text-2xl m-1 text-green-200 ">&#9734;</p>
            `;
        }else if ( ratePopup.value === "1/5"){
            starsRating.innerHTML ="";
            starsRating.innerHTML+= `
                    <p class="text-2xl m-1 text-green-200 font-bold">&#9733;</p>
                    <p class="text-2xl m-1 text-green-200 ">&#9734;</p>
                    <p class="text-2xl m-1 text-green-200 ">&#9734;</p>
                    <p class="text-2xl m-1 text-green-200 ">&#9734;</p>
                    <p class="text-2xl m-1 text-green-200 ">&#9734;</p>
            `;
        }

        bgblur.classList.add("hidden");
      });
    }
  });
}
//submit change

//close and open popup
const Annuler = document.querySelector("#Annuler");
const AnnulerX = document.querySelector("#AnnulerX");
const bgblur = document.querySelector("#bgblur");
if (Annuler) {
  Annuler.addEventListener("click", function () {
    bgblur.classList.add("hidden");
  });
}
if (AnnulerX) {
  AnnulerX.addEventListener("click", function () {
    bgblur.classList.add("hidden");
  });
}
