// Import the mqtt library
//const mqtt = require('mqtt');

import mqtt from 'mqtt';

// Connect to an MQTT broker (e.g., test.mosquitto.org)
const client = mqtt.connect('mqtt://test.mosquitto.org');

// On successful connection
client.on('connect', () => {
  console.log('Connected to broker');

  // Subscribe to a topic
  client.subscribe('home/temperature',{ qos: 2 },(err) => {
    if (!err) {
      console.log('Subscribed to topic: home/temperature');
    }
  });
});

// When a message is received from the subscribed topic
client.on('message', (topic, message) => {
  console.log(`Message received on topic ${topic}: ${message.toString()}`);
});

// Handle errors
client.on('error', (err) => {
  console.error('Error: ', err);
});
