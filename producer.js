const axios = require('axios');

async function produce(payload) {
  const res = await axios.post('http://localhost:3000/produce', payload);
  console.log('Produced:', res.data.message);
}

// Example usage:
produce({ sensorId: 'A1', temp: Math.floor(Math.random() * 100) });
