function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           // resolve("Data fetched!");
            reject("Data reject")
        }, 1000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
