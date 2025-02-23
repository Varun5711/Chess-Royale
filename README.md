# **ChessGame - Multiplayer Chess with Node.js & Socket.io**  

♟️ **ChessGame** is a real-time multiplayer chess game built with **Node.js, Express, Chess.js, and Socket.io**. It allows two players to compete online with smooth WebSocket-based communication.  

## **Features**  
✅ **Real-time multiplayer** using **Socket.io**  
✅ **Legal move validation** using **Chess.js**  
✅ **Interactive drag-and-drop chessboard**  
✅ **Spectator mode** for viewers  
✅ **Smooth UI updates** with WebSockets  

## **Tech Stack**  
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express  
- **WebSockets:** Socket.io  
- **Game Logic:** Chess.js  

## Game Board Example 

![Chess Board](Oveeview.png)

## **Installation & Setup**  
### **1. Clone the repository**  
```sh
git clone https://github.com/yourusername/ChessGame.git
cd ChessGame

2. Install dependencies

npm install

3. Create a .env file (Optional, for deployment & port settings)

PORT=3000

4. Start the server

node server.js

or with nodemon (for development):

npx nodemon server.js

5. Open in Browser

Go to http://localhost:3000 and start playing!

How to Play?
	•	Player 1 and Player 2 connect via WebSockets.
	•	Moves are validated and broadcasted in real-time.
	•	Spectators can watch live games.

Deployment

To deploy on Render, Railway, or VPS, make sure to:
	1.	Set PORT dynamically (process.env.PORT || 3000).
	2.	Use PM2 or nodemon to keep the server running.

Contributing
	1.	Fork the repo & create a feature branch.
	2.	Submit a PR with a detailed description.

License

MIT License.

🚀 Enjoy your Chess Game! ♟️♔♞

---

Replace `"path/to/your-image1.png"` and `"path/to/your-image2.png"` with actual image paths after you take screenshots of your chess game in action.  

Let me know if you need any modifications! 🚀
