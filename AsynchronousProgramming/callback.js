
console.log("Hello")
let a = 10 ;

function fetchData(callback) {
    setTimeout(() => {
        callback(a= 20);
    }, 1000);
}

fetchData((data) => {
    console.log(a);
});
console.log("Hiiii")