# Tiny Broker

Tiny Broker is a toy real-time streaming project designed to help understand the concepts of message brokers like Kafka. It uses a simple in-memory message queue implemented with Node.js and Express.

## Features

- **Producer**: Sends messages to the broker.
- **Broker**: Acts as a message queue, storing and serving messages to consumers.
- **Consumer**: Polls the broker for new messages.

## Project Structure

```
.gitignore
broker.js       # Implements the message broker
consumer.js     # Polls the broker for new messages
producer.js     # Sends messages to the broker
package.json    # Project metadata and dependencies
```

## How It Works

1. **Producer**: Sends data (e.g., sensor readings) to the broker via a POST request to `/produce`.
2. **Broker**: Stores messages in an in-memory array and assigns each message a unique ID.
3. **Consumer**: Polls the broker via a GET request to `/consume/:lastId` to fetch messages with IDs greater than `lastId`.

## Endpoints

### `/produce` (POST)
- **Description**: Accepts a payload and stores it as a message in the broker.
- **Request Body**: JSON object representing the payload.
- **Response**: JSON object with the status and the stored message.

### `/consume/:lastId` (GET)
- **Description**: Fetches messages with IDs greater than `lastId`.
- **Response**: Array of new messages.

## Getting Started

### Prerequisites
- Node.js installed on your system.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/email362/tiny-broker.git
   cd tiny-broker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
1. Start the broker:
   ```bash
   npm start
   ```
   The broker will run on `http://localhost:3000`.

2. Run the producer:
   ```bash
   npm run producer
   ```
   This will simulate sending random sensor data to the broker every 5 seconds.

3. Run the consumer:
   ```bash
   npm run consumer
   ```
   This will poll the broker every 2 seconds for new messages.

## Example Output

### Producer
```
Produced: { id: 0, timestamp: 1691234567890, payload: { sensorId: 'A1', temp: 42 } }
```

### Consumer
```
🔥 New message: { sensorId: 'A1', temp: 42 }
```

## License

This project is licensed under the ISC License.

## Author

Created by **chyer**. For issues, visit the [GitHub Issues](https://github.com/email362/tiny-broker/issues) page.