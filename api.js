async function getData() {
    const url = "https://api.githup.com/users/fayzabenjaa"
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error("error HTTP : " + response.status)
        }
        const user = await response.json();
        console.log(user.name)
    }catch(error) {
        console.log("Error", error.message);    
    }
}
getData();