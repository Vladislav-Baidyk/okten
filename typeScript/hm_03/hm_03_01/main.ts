
function catchSomeSpecific<T>(url:string){
    return fetch(url)
        .then((res) => res.json())
        .then(data => data as T);
}