const express = require("express");
const socket = require("socket.io");
const htpp = require("http");
const { Chess } = require("chess.js");
const path = require("path");

const app = express();

const server = htpp.createServer(app);
const io = socket(server);

const chess = new Chess();
let players = {};
let currentPlayer = "w";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Chess Game"
    });
});

io.on("connection", (uniquesocket) => {
    console.log("connected");

    if (!players.white) {
        players.white = uniquesocket.id;
        uniquesocket.emit("playerRole", "w");
    } else if (!players.black) {
        players.black = uniquesocket.id;
        uniquesocket.emit("playerRole", "b");
    } else {
        uniquesocket.emit("spectatorRole");
    }

    uniquesocket.on("disconnect", () => {
        if (players.white === uniquesocket.id) {
            delete players.white;
        } else if (players.black === uniquesocket.id) {
            delete players.black;
        }
    });

    uniquesocket.on("move", (move) => {
        try {
            if (chess.turn === "w" && uniquesocket.id !== players.white) return;
            if (chess.turn === "b" && uniquesocket.id !== players.black) return;

            const result = chess.move(move);
            if(result) {
                currentPlayer = chess.turn();
                io.emit("move", move);
                io.emit("boardState" , chess.fen());
            } else {
                console.log("Invalid Move : " , move);
                uniquesocket.emit("invalidMove" , move);
            }
        }
        catch (err) {
            console.log(err);
            uniquesocket.emit("invalidMove" , move);
         }
    });
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
