function catchSomeSpecific(url) {
    return fetch(url)
        .then(function (res) { return res.json(); })
        .then(function (data) { return data; });
}
