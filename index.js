const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));


main().then(() => {
    console.log("Connection Succesfull")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find(); // Pretty print chats
        //console.log(chats)
        res.render("index.ejs" , {chats}); // Send back the chat data
    } catch (error) {
        console.error("Error fetching chats:", error);
    }
});
//new route
app.get("/chats/new" , (req , res) => {
    res.render("new.ejs");
})
//create route
app.post("/chats" , (req,res) => {
    let {from , to , msg } = req.body;
    let newChat = new Chat({
        from : from,
        to : to,
        msg : msg,
        created_at : new Date(),
    });
    // console.log(newChat);
    newChat.save().then(res => {
        console.log("chat was saved !");
    }).catch(err => {
        console.log(err);
    });
    //res.send("Working");
    res.redirect("/chats")
})
//edit route 
app.get("/chats/:id/edit" , async (req,res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat})
});
//update route
app.put("/chats/:id", async (req,res) => {
    let {id} = req.params;
    let {msg : newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg : newMsg},
        {
            new : true,
            runValidators : true
        }
    );
    //console.log(updatedChat);
    res.redirect("/chats");
});

//Destroy Route
app.delete("/chats/:id" , async (req,res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

let chat1 = new Chat({
    from: "neha",
    to : "priya",
    msg : "The Seminar I attended was Amazing !",
    created_at : new Date()
})

// chat1.save().then((res) => {
//     console.log(res);
// });

app.get('/' , (req,res) => {
    res.send("/ Rounte working")
})

app.listen(8080 , () => {
    console.log(`app is listening on port 8080`);
});