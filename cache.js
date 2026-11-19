const dure = 10 * 60 * 1000

export function setCache(key, data){
    localStorage.setItem(key, JSON.stringify({data: data, savedAt: Date.now() }));    
}

