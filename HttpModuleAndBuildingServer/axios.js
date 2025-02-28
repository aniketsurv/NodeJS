

import axios from 'axios';

// axios.get('http://127.0.0.1:3000/')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });


  axios.post('http://127.0.0.1:3000/login',{ "id": "2", "name": "Pise" }) 
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  

// import axios from 'axios';


// axios.get('http://127.0.0.1:3000/')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });