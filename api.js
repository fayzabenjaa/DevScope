
export async function getData(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if(!response.ok) {
            throw new Error("error HTTP : " + response.status)
        }
        const user = await response.json();
        // console.log(user.created_at);
        return user ;
    }catch(error) {
        console.log("Error", error.message);    
    }
}

export async function getRepo (username) {
    try{
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=3`);
        if(!response.ok) {
            throw new Error("error HTTP : " + response.status)
        }
        const repos = await response.json();
        return repos;
    }catch (error) {
        console.log("Error", error.message);
        throw error;
    }
}

export async function mockApi () {
    try{
        const response = await fetch ("https://6af5f25af6270fa08d68edd9.mockapi.io/api/v1/candidats")
        if(!response.ok) {
            throw new Error("error HTTP : " + response.status)
        }
        const candidats = await response.json();
        return candidats;
    }catch (error) {
        console.log("Error", error.message);
        throw error;
    }
}
export async function addCandidats(candidat) {
    try{
        const response = await fetch("https://6af5f25af6270fa08d68edd9.mockapi.io/api/v1/candidats",
            {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(candidat)
            }
        );
        if(!response.ok) {
            throw new Error("error HTTP : " + response.status)
        }
        return await response.json();
    } catch(error) {
        console.log("Error", error.message);
        throw error;
    }
}
