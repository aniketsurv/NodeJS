// Importing MyEvent and produceEvent from eventEmitter.js
const { MyEvent, produceEvent } = require("/home/developers/AniketWorkSpace/NodeJS/EventDrivenProgramming/eventEmitter.js");


// Listener for 'CustomEvent'
MyEvent.on("CustomEvent", (data) => {
    console.log("CustomEvent created--", data);
});

// Listener for 'RunOnce', which will trigger only once
MyEvent.once("RunOnce", (data) => {
    console.log("RunOnce event created--", data);
});


// Trigger the events
produceEvent();


