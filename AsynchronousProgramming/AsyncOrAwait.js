// Asynchronous function that returns a promise
async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
}

// Main function using async/await
async function main() {
    try {
        // Waits for the fetchData promise to resolve
        const data = await fetchData();
        console.log(data); // Should log "Data fetched!" to the console
    } catch (error) {
        // Error handling
        console.error("Error:", error);
    }
}

// Call the main function
main();
