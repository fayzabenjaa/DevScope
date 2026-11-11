
export async function getData(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if(!response.ok) {
            throw new Error("error HTTP : " + response.status)
        }
        const user = await response.json();
        console.log(user.created_at);
        return user ;
    }catch(error) {
        console.log("Error", error.message);    
    }
}

export async function getRepo (username) {
    try{
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
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

