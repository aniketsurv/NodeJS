const EventEmitter = require('events');

// Create an instance of EventEmitter
const MyEvent = new EventEmitter();

// Function to emit the events
function produceEvent() {
    // Emitting 'CustomEvent'
    MyEvent.emit("CustomEvent", { message: "explain about CustomEvent" });

    // Emitting 'RunOnce' multiple times
    MyEvent.emit("RunOnce", { message: "explain about RunOnce (first emission)" });
    MyEvent.emit("RunOnce", { message: "explain about RunOnce (second emission)" });
}

// Export the event emitter and the function to trigger events
module.exports = {
    MyEvent,
    produceEvent
};
