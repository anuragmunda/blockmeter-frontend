# 🌐 Gas Fee Analyzer Frontend (Next.js)

This is the **frontend** for the Gas Fee Analyzer web app.  
It provides a beautiful UI for viewing live gas prices, visualizing historical trends, and tracking gas fee estimates.

---

## 🖼 Preview

![Gas Fee Analyzer UI](https://i.ibb.co/Jjhsb8wr/Screenshot-191.png)

---

## 🖼 Features

- 🔁 Live gas fee updates via WebSocket
- 📈 Historical gas price charts
- 🕒 Countdown to next update (synced with backend cron)
- 🌐 Multi-chain support (Ethereum, Polygon, Arbitrum, etc.)
- 📊 FAQ section

---

## ⚙️ Tech Stack

- **Next.js** (React + TypeScript)
- **Tailwind CSS** for styling
- **Socket.io Client** for WebSocket
- **Recharts/Chart.js** for graphs
- **Zustand** for global state (chain selection)
- **Deployed on [Vercel](https://blockmeter.vercel.app)**

---

## 🛠 Setup Instructions

### 1. Install & Setup
```bash
cd frontend
npm install
cp .env.local.example .env.local
