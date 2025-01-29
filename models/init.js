const mongoose = require("mongoose");
const Chat = require("./chat.js");

main()
  .then(() => {
    console.log("Connection Successful");
    seedChats(); // Call the function to seed the database
  })
  .catch((err) => console.error("Database connection error:", err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

// Seed chat data
async function seedChats() {
  const allChats = [
    {
      from: "paras",
      to: "elon",
      msg: "When are you launching your new rocket?",
      created_at: new Date(),
    },
    {
      from: "neha",
      to: "Bill Gates",
      msg: "Windows updates are horrible!",
      created_at: new Date(),
    },
    {
      from: "paras",
      to: "Sundar Pichai",
      msg: "Google must improve its Gemini!",
      created_at: new Date(),
    },
    {
      from: "Henry Ford",
      to: "Ferrari",
      msg: "We are going to knock you down in the final!",
      created_at: new Date(),
    },
    {
      from: "Lewis Hamilton",
      to: "Enzo Ferrari",
      msg: "Let's get my championship back!",
      created_at: new Date(),
    },
  ];

  try {
    const result = await Chat.insertMany(allChats);
    console.log("Chats inserted successfully:", result);
  } catch (err) {
    console.error("Error inserting chats:", err);
  }
}
