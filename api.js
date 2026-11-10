async function getData() {
    try {
        const response = await fetch("https://api.github.com/users/test");
        if(!response.ok) {
            throw new Error("error HTTP : " + response.status)
        }
        const user = await response.json();
        console.log(user.login)
    }catch(error) {
        console.log("Error", error.message);    
    }
}
getData();
