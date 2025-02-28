// Import the mqtt library
//const mqtt = require('mqtt');

import mqtt from 'mqtt';

// Connect to an MQTT broker (e.g., test.mosquitto.org)
const client = mqtt.connect('mqtt://test.mosquitto.org');

// On successful connection
client.on('connect', () => {
  console.log('Connected to broker');

  // Publish a message to a topic
  client.publish('home/temperature', '11.2°C', { qos: 2 }, () => {
    console.log('Message sent');
  });
});

// Handle errors
client.on('error', (err) => {
  console.error('Error: ', err);
});
