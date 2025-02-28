// Step 1: Define fetchData
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback("fetchedData");
    }, 1000);
}

// Step 2: Define processData
function processData(data, callback) {
    setTimeout(() => {
        console.log("Data processed!");
        callback("processedData");
    }, 1000);
}

// Step 3: Define saveData
function saveData(data, callback) {
    setTimeout(() => {
        console.log("Data saved!");
        callback("savedData");
    }, 1000);
}


fetchData((data) => {
    processData(data, (processedData) => {
        saveData(processedData, (saved) => {
            console.log("Data saved:", saved);
        });
    });
});
