const dure = 10 * 60 * 1000

export function setCache(key, data){
    localStorage.setItem(key, JSON.stringify({data: data, savedAt: Date.now() }));    
}

export function getCache(key){
    const entry = JSON.parse(localStorage.getItem(key))
    if(entry && Date.now() - entry.savedAt < dure){
        return entry.data;
    }else{
        return null;
    }
}