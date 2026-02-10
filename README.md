# MONGO using Express

A simple CRUD (Create, Read, Update, Delete) chat application built with Express.js and MongoDB. This project demonstrates how to build a full-stack web application using Node.js, Express, MongoDB, and EJS templating engine.

## Features

- 📝 Create new chat messages
- 👁️ View all chat messages
- ✏️ Edit existing messages
- 🗑️ Delete messages
- 💾 Persistent data storage with MongoDB
- 🎨 Dynamic views with EJS templating

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **EJS** - Embedded JavaScript templating
- **Method-Override** - Middleware for using HTTP verbs like PUT and DELETE

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on port 27017)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ParasJagdale/MONGO_using-express-.git
cd MONGO_using-express-
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running on your local machine:
```bash
# Start MongoDB service (on Linux/Mac)
sudo systemctl start mongod

# Or on Windows, start MongoDB from Services
```

4. (Optional) Seed the database with initial data:
```bash
node models/init.js
```

## Usage

1. Start the application:
```bash
node index.js
```

2. Open your browser and navigate to:
```
http://localhost:8080/chats
```

3. You can now:
   - View all chats
   - Add new chats
   - Edit existing chats
   - Delete chats

## Project Structure

```
MONGO_using-express-/
│
├── models/
│   ├── chat.js          # Chat model schema
│   └── init.js          # Database initialization and seeding
│
├── views/
│   ├── index.ejs        # Main page showing all chats
│   ├── new.ejs          # Form to create new chat
│   └── edit.ejs         # Form to edit existing chat
│
├── public/              # Static files (CSS, images, etc.)
│
├── index.js             # Main application file
├── package.json         # Project dependencies and scripts
└── README.md            # This file
```

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/chats` | Display all chats |
| GET | `/chats/new` | Show form to create new chat |
| POST | `/chats` | Create a new chat |
| GET | `/chats/:id/edit` | Show form to edit a chat |
| PUT | `/chats/:id` | Update a chat |
| DELETE | `/chats/:id` | Delete a chat |

## Chat Schema

Each chat message has the following structure:

```javascript
{
  from: String (required),
  to: String (required),
  msg: String (max 50 characters),
  created_at: Date (required)
}
```

## Database Configuration

The application connects to MongoDB at:
```
mongodb://127.0.0.1:27017/whatsapp
```

To change the database connection, modify the connection string in `index.js`.

## License

ISC

## Author

ParasJagdale
