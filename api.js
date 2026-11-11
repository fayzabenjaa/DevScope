
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

