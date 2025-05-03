const axios = require('axios');

let lastId = -1;

async function consume() {
  try {
    const res = await axios.get(`http://localhost:3000/consume/${lastId}`);
    const messages = res.data;
    for (const msg of messages) {
      console.log(`🔥 New message:`, msg.payload);
      lastId = msg.id;
    }
  } catch (err) {
    console.error('Error consuming:', err.message);
  }
}

// Poll every 2 seconds
setInterval(consume, 2000);
